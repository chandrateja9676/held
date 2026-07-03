import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { verifyPaymentSignature } from "@/lib/razorpay.server";

export const Route = createFileRoute("/api/verify-payment")({
  server: {
    handlers: {
      POST: async ({ request, env }) => {
        let body: {
          razorpay_payment_id?: string;
          razorpay_order_id?: string;
          razorpay_signature?: string;
        };

        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = body;

        if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
          return Response.json(
            { error: "Missing payment verification fields" },
            { status: 400 },
          );
        }

        const isValid = await verifyPaymentSignature(
          env,
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        );

        if (!isValid) {
          return Response.json({ error: "Invalid payment signature" }, { status: 400 });
        }

        return Response.json({
          success: true,
          payment_id: razorpay_payment_id,
          order_id: razorpay_order_id,
        });
      },
    },
  },
});
