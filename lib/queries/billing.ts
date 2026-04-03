/**
 * Creates a Stripe checkout session for the landing page (unauthenticated user).
 * The user has NOT signed in yet, so we pass no profileId.
 * The webhook will match the profile by email after payment.
 */
export async function createCheckoutSession(plan: any) {
  const res = await fetch("/api/stripe/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plan }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Failed to create checkout session");
  }

  return res.json();
}