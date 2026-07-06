import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import {
  createRazorpayOrder,
  getRazorpayErrorMessage,
  getRazorpayErrorStatus,
} from "@/lib/razorpay.server";

export const Route = createFileRoute("/api/create-order")({
  server: {
    handlers: {
      POST: async ({ request, env }) => {
        console.log("Available env keys:", Object.keys(env || {}));
  console.log("Razorpay ID present?:", !!env?.RAZORPAY_KEY_ID);
        let body: { amount?: unknown; currency?: string; receipt?: string };

        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const { amount, currency = "INR", receipt } = body;

        if (typeof amount !== "number" || !Number.isInteger(amount) || amount < 100) {
          return Response.json(
            { error: "Amount must be an integer of at least 100 paise" },
            { status: 400 },
          );
        }

        try {
          const order = await createRazorpayOrder(
            env,
            amount,
            currency,
            receipt ?? `receipt_${Date.now()}`,
          );

          return Response.json({
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
          });
        } catch (error) {
          const status = getRazorpayErrorStatus(error);
          return Response.json({ error: getRazorpayErrorMessage(error) }, { status });
        }
      },
    },
  },
});
