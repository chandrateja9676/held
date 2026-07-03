import { useCallback, useState } from "react";
import { toast } from "sonner";

function loadRazorpayScript(): Promise<boolean> {
  if (typeof window === "undefined") {
    return Promise.resolve(false);
  }

  if (window.Razorpay) {
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

async function fetchRazorpayClientKey() {
  try {
    const response = await fetch("/api/payment-config");
    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { keyId?: string };
    return typeof data.keyId === "string" ? data.keyId : null;
  } catch {
    return null;
  }
}

type CheckoutOptions = {
  amountInPaise: number;
  description?: string;
};

export function useRazorpayCheckout() {
  const [isProcessing, setIsProcessing] = useState(false);

  const startCheckout = useCallback(async ({ amountInPaise, description }: CheckoutOptions) => {
    let keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!keyId) {
      keyId = await fetchRazorpayClientKey();
    }

    if (!keyId) {
      toast.error("Payment is not configured. Please contact support.");
      return;
    }

    if (import.meta.env.PROD && keyId.startsWith("rzp_test_")) {
      toast.error("Payment is not available. Please contact support.");
      return;
    }

    if (amountInPaise < 100) {
      toast.error("Minimum donation amount is ₹1.");
      return;
    }

    setIsProcessing(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error("Could not load payment gateway. Please try again.");
        return;
      }

      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: "INR",
          receipt: `donation_${Date.now()}`,
        }),
      });

      const orderData = (await orderResponse.json()) as {
        order_id?: string;
        amount?: number;
        currency?: string;
        error?: string;
      };

      if (!orderResponse.ok || !orderData.order_id) {
        toast.error(orderData.error ?? "Could not start payment. Please try again.");
        return;
      }

      await new Promise<void>((resolve) => {
        const razorpay = new window.Razorpay({
          key: keyId,
          amount: orderData.amount ?? amountInPaise,
          currency: orderData.currency ?? "INR",
          name: "Held With Love Foundation",
          description: description ?? "Donation",
          order_id: orderData.order_id!,
          theme: { color: "#e85d4c" },
          handler: async (response) => {
            try {
              const verifyResponse = await fetch("/api/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
              });

              const verifyData = (await verifyResponse.json()) as {
                success?: boolean;
                error?: string;
              };

              if (!verifyResponse.ok || !verifyData.success) {
                toast.error(verifyData.error ?? "Payment verification failed.");
                return;
              }

              toast.success("Thank you! Your donation was successful.");
            } catch {
              toast.error("Payment verification failed. Please contact support.");
            } finally {
              resolve();
            }
          },
          modal: {
            ondismiss: () => {
              toast.message("Payment cancelled.");
              resolve();
            },
          },
        });

        razorpay.on("payment.failed", (response) => {
          toast.error(response.error.description || "Payment failed. Please try again.");
          resolve();
        });

        razorpay.open();
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  }, []);

  return { startCheckout, isProcessing };
}
