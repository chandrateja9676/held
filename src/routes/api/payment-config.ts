import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/api/payment-config")({
  server: {
    handlers: {
      GET: async ({ env }) => {
        const keyId = typeof env === "object" && env !== null
          ? (env as Record<string, unknown>).VITE_RAZORPAY_KEY_ID ??
            (env as Record<string, unknown>).RAZORPAY_KEY_ID
          : undefined;

        return Response.json({ keyId: typeof keyId === "string" ? keyId : null });
      },
    },
  },
});
