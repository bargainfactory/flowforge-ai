import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") ?? "";

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ received: false }, { status: 503 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      // TODO: Provision client portal access via Supabase
      // - Create user row with session.customer_email
      // - Assign tier based on price ID
      // - Send welcome email via SendGrid/Resend
      console.log("New subscription:", session.id);
      break;
    }
    case "customer.subscription.deleted": {
      // TODO: Revoke portal access, send churn survey
      console.log("Subscription cancelled:", event.data.object.id);
      break;
    }
    case "invoice.payment_failed": {
      // TODO: Send dunning email, pause automations after 3 failures
      console.log("Payment failed:", event.data.object.id);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
