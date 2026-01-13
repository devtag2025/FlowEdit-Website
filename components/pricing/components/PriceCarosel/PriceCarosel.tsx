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
  features: { _key?: string; text: string; type: FeatureType }[];
  cta?: {
    _key?: string;
    text?: string;
    linkType?: string;
    internalLink?: {
      _id?: string;
      title?: string;
      slug?: {
        current?: string;
      };
    };
    externalUrl?: string;
    openInNewTab?: boolean;
    variant?: string;
  };
}

interface PriceCaroselProps {
  discountApplied?: boolean;
  pricingPlans?: PricingPlan[];
  discountPercentage?: number;
}

const PriceCarosel = ({ 
  discountApplied = false, 
  pricingPlans = [],
  discountPercentage = 35 
}: PriceCaroselProps) => {
  const sliderRef = useRef<SwiperType | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Calculate prices with discount
  const calculatePrice = (originalPrice: number) => {
    if (!discountApplied) return originalPrice;
    const discountMultiplier = (100 - discountPercentage) / 100;
    return Math.round(originalPrice * discountMultiplier);
  };

  const discountedPriceData = pricingPlans.map((card) => ({
    ...card,
    price: calculatePrice(card.price),
  }));

  return (
    <div className="relative py-0 mb-[15px] lg:mb-[170px]">
      <div className="w-full">
        <div className="w-full">
          <div className="mx-auto w-full px-2.5 md:px-0 max-w-[1216px]">
          <div className="lg:hidden">
            <Swiper
              onSwiper={(swiper) => (sliderRef.current = swiper)}
              modules={[FreeMode]}
              freeMode={true}
              grabCursor={true}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                  spaceBetween: 10,
                },
              }}
              centeredSlides={true}
              className="w-full py-8"
            >
              {discountedPriceData.map((card, i) => (
                <SwiperSlide key={card._key || i}>
                  <div
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    className="flex justify-center"
                  >
                    <PriceCard 
                      title={card.title}
                      price={card.price}
                      priceLabel={card.priceLabel}
                      features={card.features}
                      glow={card.glow}
                      cta={card.cta}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden lg:flex items-center justify-center gap-8">
            {discountedPriceData.map((card, i) => (
              <PriceCard 
                key={card._key || i}
                title={card.title}
                price={card.price}
                priceLabel={card.priceLabel}
                features={card.features}
                glow={card.glow}
                cta={card.cta}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCarosel;
