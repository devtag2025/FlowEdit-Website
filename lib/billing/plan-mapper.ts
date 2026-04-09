
export const SANITY_TO_STRIPE_PLAN_MAP: Record<string, string> = {
  // Exact matches (already correct)
  "starter": "starter",
  "pro": "pro",
  "agency": "agency",
  "launch": "launch",

  // Common variations from Sanity CMS
  "plus pro": "pro",
  "pro plan": "pro",
  "professional": "pro",

  "starter plan": "starter",
  "basic": "starter",

  "agency plan": "agency",
  "team": "agency",
  "business": "agency",

  // Fallback: slugify and hope for the best
  // e.g., "Plus Pro" → "plus-pro" → (no match) → fallback to title-based
};

/**
 * Normalizes a plan key from Sanity to a Stripe-compatible key.
 * Falls back to slugified title if no mapping exists.
 */
export const normalizePlanKey = (
  sanityPlanKey?: string | null,
  title?: string
): string => {
  if (!sanityPlanKey && !title) return "launch";

  const key = (sanityPlanKey || title || "").toLowerCase().trim();

  // Direct map lookup
  if (key in SANITY_TO_STRIPE_PLAN_MAP) {
    return SANITY_TO_STRIPE_PLAN_MAP[key];
  }

  // Try slugified version (e.g., "Plus Pro" → "plus-pro")
  const slugified = key.replace(/\s+/g, "-");
  if (slugified in SANITY_TO_STRIPE_PLAN_MAP) {
    return SANITY_TO_STRIPE_PLAN_MAP[slugified];
  }

  // Fallback: derive from title (your existing logic)
  if (title) {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("starter") || lowerTitle.includes("basic")) return "starter";
    if (lowerTitle.includes("pro") || lowerTitle.includes("professional")) return "pro";
    if (lowerTitle.includes("agency") || lowerTitle.includes("team") || lowerTitle.includes("business")) return "agency";
  }

  // Last resort
  console.warn(`[PlanMapper] Unmapped plan key: "${sanityPlanKey}", title: "${title}". Falling back to "launch".`);
  return "launch";
};
