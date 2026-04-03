import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY must be configured in the environment");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: process.env.STRIPE_API_VERSION || "2026-03-25.dahlia",
});

const PRICE_MAP = {
  starter: process.env.STRIPE_PRICE_STARTER,
  pro:     process.env.STRIPE_PRICE_PRO,
  agency:  process.env.STRIPE_PRICE_AGENCY,
};

/**
 * Resolve any plan value → a valid Stripe plan key.
 * Handles: "starter", "pro", "agency" (direct keys)
 *       AND "Starter", "Pro", "Agency", "Professional", "Enterprise" (Sanity titles)
 *       AND anything else that contains those words.
 */
function resolvePlanKey(raw) {
  if (!raw) return null;
  const lower = String(raw).toLowerCase().trim();

  if (lower === "starter" || lower.includes("starter") || lower.includes("basic")) return "starter";
  if (lower === "pro"     || lower.includes("pro") || lower.includes("professional")) return "pro";
  if (lower === "agency"  || lower.includes("agency") || lower.includes("enterprise") || lower.includes("team")) return "agency";

  return null;
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Accept either `plan` (key) or `title` (Sanity plan title) — whichever is sent
    const rawPlan = body.plan || body.title || null;
    const plan = resolvePlanKey(rawPlan);

    if (!plan) {
      console.error("[Checkout] Could not resolve plan from:", rawPlan);
      return NextResponse.json(
        { message: `Invalid plan: "${rawPlan}". Expected starter, pro, or agency.` },
        { status: 400 }
      );
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