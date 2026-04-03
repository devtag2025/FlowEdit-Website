"use client";

import PriceCard, { FeatureType } from "./PriceCard";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

interface PricingPlan {
  _key?: string;
  title: string;
  price: number;
  priceLabel?: string;
  glow?: boolean;
  planKey?: string;
  features: { _key?: string; text: string; type: FeatureType }[];
}

interface PriceCaroselProps {
  discountApplied?: boolean;
  pricingPlans?: PricingPlan[];
  discountPercentage?: number;
  loadingPlan?: string | null;
  onCheckout: (planKey: string) => void;
}

const PriceCarosel = ({
  discountApplied = false,
  pricingPlans = [],
  discountPercentage = 35,
  loadingPlan = null,
  onCheckout,
}: PriceCaroselProps) => {
  const sliderRef = useRef<SwiperType | null>(null);

  const calculatePrice = (originalPrice: number) => {
    if (!discountApplied) return originalPrice;
    return Math.round(originalPrice * ((100 - discountPercentage) / 100));
  };

  const cards = pricingPlans.map((card) => ({
    ...card,
    price: calculatePrice(card.price),
    // Use explicit planKey from Sanity if set, otherwise fall back to the
    // plan title. The server-side checkout route resolves both correctly.
    resolvedPlanKey: card.planKey || card.title,
  }));

  return (
    <div className="relative py-0 mb-[15px] lg:mb-[170px]">
      <div className="mx-auto w-full px-2.5 md:px-0 max-w-[1216px]">

        {/* Mobile: Swiper */}
        <div className="lg:hidden">
          <Swiper
            onSwiper={(swiper) => (sliderRef.current = swiper)}
            modules={[FreeMode]}
            freeMode
            grabCursor
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 1.5, centeredSlides: true, spaceBetween: 10 } }}
            centeredSlides
            className="w-full py-8"
          >
            {cards.map((card, i) => (
              <SwiperSlide key={card._key || i}>
                <div className="flex justify-center">
                  <PriceCard
                    title={card.title}
                    price={card.price}
                    priceLabel={card.priceLabel}
                    features={card.features}
                    glow={card.glow}
                    planKey={card.resolvedPlanKey}
                    isLoading={loadingPlan === card.resolvedPlanKey}
                    onCheckout={onCheckout}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: flex row */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          {cards.map((card, i) => (
            <PriceCard
              key={card._key || i}
              title={card.title}
              price={card.price}
              priceLabel={card.priceLabel}
              features={card.features}
              glow={card.glow}
              planKey={card.resolvedPlanKey}
              isLoading={loadingPlan === card.resolvedPlanKey}
              onCheckout={onCheckout}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default PriceCarosel;