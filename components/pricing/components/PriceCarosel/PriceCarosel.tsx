"use client";

import PriceCard, { FeatureType } from "./PriceCard";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

interface SanityPricingPlan {
  _key?: string;
  title: string;
  price: number;
  priceLabel?: string;
  glow?: boolean;
  features: { _key?: string; text: string; type: FeatureType }[];
}

interface PriceCaroselProps {
  discountApplied?: boolean;
  pricingPlans?: SanityPricingPlan[]; // kept for features/glow if needed
  discountPercentage?: number;
  loadingPlan?: string | null;
  onCheckout: (planKey: string) => void;
}

// ── Hardcoded plans ───────────────────────────────────────────────────────────
// These are the source of truth for names, prices, and Stripe keys.
// Sanity is NOT used for titles or prices — only for features/glow (optional).
const PLANS = [
  {
    key:      "starter",
    title:    "Starter",
    price:    499,
    glow:     false,
    features: [
      { text: "5 videos per month",  type: "check"  as FeatureType },
      { text: "48h turnaround",      type: "check"  as FeatureType },
      { text: "Stock footage",       type: "check"  as FeatureType },
      { text: "1 revision round",    type: "check"  as FeatureType },
      { text: "Dedicated editor",    type: "minus"  as FeatureType },
      { text: "Priority support",    type: "minus"  as FeatureType },
    ],
  },
  {
    key:      "pro",
    title:    "Pro",
    price:    999,
    glow:     true,
    features: [
      { text: "15 videos per month", type: "check"  as FeatureType },
      { text: "24h turnaround",      type: "check"  as FeatureType },
      { text: "Premium stock assets",type: "check"  as FeatureType },
      { text: "Unlimited revisions", type: "check"  as FeatureType },
      { text: "Dedicated editor",    type: "check"  as FeatureType },
      { text: "Priority support",    type: "minus"  as FeatureType },
    ],
  },
  {
    key:      "agency",
    title:    "Agency",
    price:    2499,
    glow:     false,
    features: [
      { text: "Unlimited videos",        type: "check" as FeatureType },
      { text: "12h turnaround",          type: "check" as FeatureType },
      { text: "Custom motion graphics",  type: "check" as FeatureType },
      { text: "Unlimited revisions",     type: "check" as FeatureType },
      { text: "Dedicated editor",        type: "check" as FeatureType },
      { text: "Priority support",        type: "check" as FeatureType },
    ],
  },
];

const PriceCarosel = ({
  discountApplied = false,
  discountPercentage = 35,
  loadingPlan = null,
  onCheckout,
}: PriceCaroselProps) => {
  const sliderRef = useRef<SwiperType | null>(null);

  const calculatePrice = (originalPrice: number) => {
    if (!discountApplied) return originalPrice;
    return Math.round(originalPrice * ((100 - discountPercentage) / 100));
  };

  const cards = PLANS.map((plan) => ({
    ...plan,
    price: calculatePrice(plan.price),
  }));

  return (
    <div className="relative py-0 mb-[15px] lg:mb-[170px]">
      <div className="mx-auto w-full px-2.5 md:px-0 max-w-[1216px]">

        {/* Mobile: Swiper carousel */}
        <div className="lg:hidden">
          <Swiper
            onSwiper={(swiper) => (sliderRef.current = swiper)}
            modules={[FreeMode]}
            freeMode
            grabCursor
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 1.5, centeredSlides: true, spaceBetween: 10 },
            }}
            centeredSlides
            className="w-full py-8"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.key}>
                <div className="flex justify-center">
                  <PriceCard
                    title={card.title}
                    price={card.price}
                    priceLabel="Per month"
                    features={card.features}
                    glow={card.glow}
                    planKey={card.key}
                    isLoading={loadingPlan === card.key}
                    onCheckout={onCheckout}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: flex row */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          {cards.map((card) => (
            <PriceCard
              key={card.key}
              title={card.title}
              price={card.price}
              priceLabel="Per month"
              features={card.features}
              glow={card.glow}
              planKey={card.key}
              isLoading={loadingPlan === card.key}
              onCheckout={onCheckout}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default PriceCarosel;