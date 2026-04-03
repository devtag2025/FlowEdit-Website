import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
if (!stripeSecret) {
  throw new Error("STRIPE_SECRET_KEY is not configured in environment variables");
}

const stripe = new Stripe(stripeSecret, {
  apiVersion: process.env.STRIPE_API_VERSION || "2026-03-25.dahlia",
});

const PRICE_MAP = {
  starter: process.env.STRIPE_PRICE_STARTER,
  pro:     process.env.STRIPE_PRICE_PRO,
  agency:  process.env.STRIPE_PRICE_AGENCY,
};

export async function POST(request) {
  try {
    const { plan } = await request.json();

    if (!plan || !PRICE_MAP[plan]) {
      return NextResponse.json({ message: "Invalid plan" }, { status: 400 });
    }

    const priceId = PRICE_MAP[plan];
    if (!priceId) {
      return NextResponse.json(
        { message: `Price ID not configured for plan: ${plan}` },
        { status: 500 }
      );
    }

    const siteUrl      = process.env.NEXT_PUBLIC_SITE_URL;
    const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL;

    if (!siteUrl || !dashboardUrl) {
      return NextResponse.json(
        { message: "NEXT_PUBLIC_SITE_URL or NEXT_PUBLIC_DASHBOARD_URL not configured" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode:                 "subscription",
      payment_method_types: ["card"],
      line_items:           [{ price: priceId, quantity: 1 }],
      metadata:             { plan },
      customer_creation:    "always",
      success_url: `${dashboardUrl}/login?paid=true&plan=${plan}`,
      cancel_url:  `${siteUrl}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (error) {
    console.error("[Checkout] error:", error);
    return NextResponse.json({ message: error.message || "Unknown error" }, { status: 500 });
  }
}