"use client";

import Container from "@/components/shared/Container";
import PriceCard, { FeatureType } from "./PriceCard";

import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Background3 from "@/components/backgrounds/Background3";
import Image from "next/image";

const priceData: {
  title: string;
  price: number;
  glow: boolean;
  features: { text: string; type: FeatureType }[];
}[] = [
  {
    title: "Launch",
    price: 112,
    glow: false,
    features: [
      { text: "Parturient sed nunc neque", type: "minus" },
      { text: "Vel enim ultrices et ornare", type: "minus" },
      { text: "Aenean cursus nec amet", type: "minus" },
      { text: "Adipiscing accumsan ut", type: "minus" },
      { text: "Parturient imperdiet id urna", type: "minus" },
      { text: "Mollis porta bibendum", type: "minus" },
      { text: "Vel nec dapibus sem feugiat", type: "check" },
      { text: "Elementum pretium sed", type: "check" },
      { text: "Ridiculus urna habitasse", type: "check" },
    ],
  },
  {
    title: "Growth",
    price: 99,
    glow: true,
    features: [
      { text: "Ipsum eu mauris in ut massa", type: "check" },
      { text: "At id vel sit aliquet venenatis", type: "check" },
      { text: "Non at sit faucibus sed", type: "check" },
      { text: "Aliquet amet donec pulvinar", type: "check" },
      { text: "Justo et in interdum a nulla", type: "check" },
      { text: "Sit molestie libero in dui", type: "check" },
      { text: "Ultricies gravida tempus orci", type: "check" },
      { text: "Eu eget cras nunc facilisis", type: "check" },
      { text: "Gravida auctor sed donec", type: "check" },
    ],
  },
  {
    title: "Plus",
    price: 112,
    glow: false,
    features: [
      { text: "Morbi diam eros scelerisque", type: "check" },
      { text: "Urna facilisis mattis mi nulla", type: "check" },
      { text: "Volutpat odio nunc non vel", type: "check" },
      { text: "Lorem at in aliquam tellus", type: "check" },
      { text: "Molestie a vel in sed enim", type: "check" },
      { text: "Interdum lectus lorem ipsum", type: "check" },
      { text: "Nunc quis aliquet ornare", type: "check" },
      { text: "Ut bibendum mauris nisl", type: "check" },
      { text: "Dapibus at eget diam vitae", type: "check" },
    ],
  },
];

const PriceCarosel = () => {
  const sliderRef = useRef<SwiperType | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <div className="relative py-28 lg:py-20 -mt-52 mb-40 lg:mb-0">
      <div className="relative w-full h-screen">
        <Image
          src="/images/background/wave-3.png"
          alt="grid"
          fill
          className="object-cover object-top -mt-150 z-3"
        />
        <Image
          src="/images/background/wallpaper-blur.png"
          alt="grid"
          fill
          className="object-fill object-top z-3"
        />
      </div>
      <div className="absolute top-0 z-20 w-full">
        <Container>
          <div className="lg:hidden">
            <Swiper
              onSwiper={(swiper) => (sliderRef.current = swiper)}
              modules={[FreeMode]}
              freeMode={true}
              grabCursor={true}
              spaceBetween={24}
              slidesPerView={1.15}
              centeredSlides={true}
              className="w-full py-8"
            >
              {priceData.map((card, i) => (
                <SwiperSlide key={i}>
                  <div
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    className="flex justify-center"
                  >
                    <PriceCard {...card} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden lg:flex items-center justify-center gap-8">
            {priceData.map((card, i) => (
              <PriceCard key={i} {...card} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PriceCarosel;
