import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/api/payment-config")({
  server: {
    handlers: {
      GET: async ({ env }) => {
        const runtimeKeyId = typeof env === "object" && env !== null
          ? (env as Record<string, unknown>).RAZORPAY_KEY_ID ??
            (env as Record<string, unknown>).VITE_RAZORPAY_KEY_ID
          : undefined;

        const runtimeSecret = typeof env === "object" && env !== null
          ? (env as Record<string, unknown>).RAZORPAY_KEY_SECRET ??
            (env as Record<string, unknown>).VITE_RAZORPAY_KEY_SECRET
          : undefined;

        const buildTimeKeyId = typeof import.meta.env.VITE_RAZORPAY_KEY_ID === "string"
          ? import.meta.env.VITE_RAZORPAY_KEY_ID
          : undefined;

        const keyId = runtimeKeyId ?? buildTimeKeyId;

        return Response.json({
          keyId: typeof keyId === "string" ? keyId : null,
          hasSecret: typeof runtimeSecret === "string",
        });
      },
    },
  },
});
