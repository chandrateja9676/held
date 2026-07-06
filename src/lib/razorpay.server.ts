type RazorpayEnv = Record<string, unknown> & {
  RAZORPAY_KEY_ID?: string;
  RAZORPAY_KEY_SECRET?: string;
  VITE_RAZORPAY_KEY_ID?: string;
  VITE_RAZORPAY_KEY_SECRET?: string;
};

type RazorpayError = {
  statusCode?: number;
  error?: { description?: string; code?: string };
  message?: string;
};

function getCredentials(env: unknown) {
  if (!env || typeof env !== "object") {
    return null;
  }

  const razorpayEnv = env as RazorpayEnv;
  const keyId = razorpayEnv.RAZORPAY_KEY_ID ?? razorpayEnv.VITE_RAZORPAY_KEY_ID;
  const keySecret = razorpayEnv.RAZORPAY_KEY_SECRET ?? razorpayEnv.VITE_RAZORPAY_KEY_SECRET;

  if (typeof keyId !== "string" || typeof keySecret !== "string") {
    return null;
  }

  if (import.meta.env.PROD && keyId.startsWith("rzp_test_")) {
    throw new Error("Test Razorpay keys cannot be used in production");
  }

  return { keyId, keySecret };
}

function encodeBase64(value: string) {
  if (typeof btoa === "function") {
    return btoa(value);
  }

  if (typeof Buffer !== "undefined") {
    return Buffer.from(value, "utf-8").toString("base64");
  }

  throw new Error("Base64 encoding is not available in this environment");
}

function normalizeRazorpayError(error: unknown): RazorpayError {
  if (error && typeof error === "object") {
    return error as RazorpayError;
  }
  return { message: "Failed to create Razorpay order" };
}

export function getRazorpayErrorMessage(error: unknown): string {
  const razorpayError = normalizeRazorpayError(error);
  return (
    razorpayError.error?.description ??
    razorpayError.message ??
    "Failed to create Razorpay order"
  );
}

export function getRazorpayErrorStatus(error: unknown): number {
  const razorpayError = normalizeRazorpayError(error);
  if (razorpayError.statusCode === 401) return 401;
  return 500;
}

export async function createRazorpayOrder(
  env: unknown,
  amount: number,
  currency: string,
  receipt: string,
) {
  const credentials = getCredentials(env);
  if (!credentials) {
    throw new Error("Razorpay credentials are not configured");
  }

  const auth = encodeBase64(`${credentials.keyId}:${credentials.keySecret}`);
  const response = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, currency, receipt }),
  });

  const payload = await response.text();
  if (!response.ok) {
    let errorMessage = `Failed to create Razorpay order (${response.status})`;
    try {
      const parsed = JSON.parse(payload) as { error?: { description?: string; code?: string }; message?: string };
      errorMessage = parsed.error?.description ?? parsed.message ?? errorMessage;
    } catch {
      if (payload) {
        errorMessage = payload;
      }
    }

    const error = new Error(errorMessage) as RazorpayError;
    error.statusCode = response.status;
    throw error;
  }

  return JSON.parse(payload) as {
    id: string;
    amount: number;
    currency: string;
  };
}

async function computeHmacSha256(secret: string, payload: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyPaymentSignature(
  env: unknown,
  orderId: string,
  paymentId: string,
  signature: string,
): Promise<boolean> {
  const credentials = getCredentials(env);
  if (!credentials) {
    return false;
  }

  const expected = await computeHmacSha256(
    credentials.keySecret,
    `${orderId}|${paymentId}`,
  );

  return expected === signature;
}
