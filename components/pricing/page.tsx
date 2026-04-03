"use client";

import PriceBanner from "./components/PriceBanner";
import PriceCarosel from "./components/PriceCarosel/PriceCarosel";
import { useState, useEffect } from "react";
import { createCheckoutSession } from "@/lib/queries/billing";
import { getStripe } from "@/lib/stripe/stripe";
import { normalizePlanKey } from "@/lib/billing/plan-mapper"; // ← NEW IMPORT

interface PricingPageData {
  pricingData?: {
    banner?: {
      headerButtonText?: string;
      title?: string;
      description?: string;
      toggleLabel?: string;
      toggleSavingsText?: string;
    };
    pricingPlans?: Array<{
      _key?: string;
      title: string;
      price: number;
      priceLabel?: string;
      glow?: boolean;
      planKey?: string; // ← Comes from Sanity (e.g., "plus pro")
      features: Array<{
        _key?: string;
        text: string;
        type: "check" | "minus";
      }>;
    }>;
    discountPercentage?: number;
  };
}

interface PricingPageProps {
  pageData?: PricingPageData;
}

const PricingPage = ({ pageData }: PricingPageProps) => {
  const [discountApplied, setDiscountApplied] = useState(true);
  const [imageLoaded, setImageLoaded]         = useState(false);
  const [isMobile, setIsMobile]               = useState(false);
  const [loadingPlan, setLoadingPlan]         = useState<string | null>(null);

  const pricingData        = pageData?.pricingData;
  const bannerData         = pricingData?.banner;
  const pricingPlans       = pricingData?.pricingPlans || [];
  const discountPercentage = pricingData?.discountPercentage || 35;

  const backgroundImageUrl = "/homepage/pricingbg.svg";

  useEffect(() => {
    const img = new window.Image();
    img.src = backgroundImageUrl;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCheckout = async (stripePlanKey: string) => { // ← Now receives normalized key
    try {
      setLoadingPlan(stripePlanKey);

      const payload = await createCheckoutSession(stripePlanKey); // ← Send normalized key to Stripe

      if (payload.url) {
        window.location.href = payload.url;
        return;
      }

      if (!payload.id) {
        throw new Error("Checkout session returned neither a URL nor an ID.");
      }

      const stripe = await getStripe();
      const result = await stripe?.redirectToCheckout({ sessionId: payload.id });
      if (result?.error) throw new Error(result.error.message);

    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("Checkout error:", message);
      alert(`Checkout failed: ${message}`);
    } finally {
      setLoadingPlan(null);
    }
  };

  // ← NEW: Normalize plans BEFORE passing to carousel
  const normalizedPlans = pricingPlans.map(plan => ({
    ...plan,
    // Keep original for display, but add normalized key for checkout
    _normalizedPlanKey: normalizePlanKey(plan.planKey, plan.title),
  }));

  return (
    <div className="w-full relative min-h-screen overflow-hidden">
      {/* Gradient — visible while background image loads */}
      <div
        className={`absolute inset-0 bg-linear-to-b from-[#4069E4] to-[rgba(255,255,255,0)] -z-20 transition-opacity duration-300 ${
          imageLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Background image */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full min-h-screen z-0"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
          backgroundSize: isMobile ? "cover" : "100% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Page content */}
      <div className="relative z-10">
        <PriceBanner
          bannerData={bannerData}
          discountApplied={discountApplied}
          onToggleDiscount={() => setDiscountApplied((prev) => !prev)}
          discountPercentage={discountPercentage}
        />

        <PriceCarosel
          discountApplied={discountApplied}
          pricingPlans={normalizedPlans} // ← Pass normalized plans
          discountPercentage={discountPercentage}
          loadingPlan={loadingPlan}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
};

export default PricingPage;