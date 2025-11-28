"use client";

import Background1 from "@/components/backgrounds/Background1";

import PriceBackground2 from "@/components/backgrounds/PriceBackground2";
import Container from "@/components/shared/Container";
import PageHeaderButton from "@/components/shared/PageHeaderButton";
import ToggleSwitch from "@/components/shared/ToggleSwitch";
import Image from "next/image";

const PriceBanner = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="relative w-screen h-screen">
        <Image
          src="/images/background/grid.png"
          alt="grid"
          fill
          className="object-cover z-2"
        />
        <Image
          src="/images/background/gradient.png"
          alt="grid"
          fill
          className="object-fill"
        />
        <Image
          src="/images/background/spider-wave.png"
          alt="grid"
          fill
          className="object-contain z-4"
        />
      </div>

      <div className="absolute top-0 z-4 w-full h-[70vh]">
        <Container className="flex flex-col gap-5 items-center justify-center h-full w-full">
          <div className="w-fit">
            <PageHeaderButton text="Pricing" />
          </div>
          <h1 className="font-semibold text-[44px] leading-[118%] lg:text-[73px] -tracking-[0.04em] text-white text-center lg:text-left">
            Stop Editing. <br className="block lg:hidden" /> Start growing
          </h1>

          <p className="text-base lg:text-xl leading-[150%] text-white max-w-92 lg:max-w-2xl text-center">
            As we grow our library of UI components, we’re introducing a
            limited-time pricing that’s not only 50% off but also significantly
            cheaper than what’s on the market
          </p>

          <div className="flex items-center gap-3.5">
            <p className="text-lg lg:text-xl leading-[150%] text-white">
              Unlock
            </p>

            <ToggleSwitch
              checked={true}
              onChange={(value) => console.log("Toggled:", value)}
            />
            <p className="text-lg lg:text-xl leading-[150%] text-white">
              35% savings
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PriceBanner;
