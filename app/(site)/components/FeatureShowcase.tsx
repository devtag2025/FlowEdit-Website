"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";

const FeatureShowcase = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(".floating-laptop", {
      x: () => gsap.utils.random(-15, 15),
      y: () => gsap.utils.random(-20, 20),
      rotation: () => gsap.utils.random(-3, 3),
      duration: 5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="">
      <div className=" z-10 relative  w-full">
        <div className="w-full">
          <div className="mx-auto w-full px-2.5 md:px-0 max-w-[1216px] flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h1 className="font-semibold text-black -tracking-[0.04em] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] whitespace-nowrap">
              Effortless Video
            </h1>

            <h4 className="font-semibold text-black -tracking-[0.04em] max-w-80 mx-auto lg:mx-0 text-lg sm:text-xl md:text-[24px] lg:text-[28px]">
              The perfect tool for your creative mind
            </h4>

            <p className="text-black leading-[150%] max-w-md sm:max-w-108 text-sm sm:text-base md:text-lg mx-auto lg:mx-0">
              Regular video posts equals more reach. With FlowEdit, you get a
              steady stream of high-quality, platform-optimized videos that keep
              your audience engaged and your brand top-of-mind.
            </p>
          </div>

          <div className="relative w-full h-[450px] md:h-[530px] block lg:hidden overflow-hidden floating-laptop">
            <Image
              src="/images/home-page/laptop.png"
              alt="laptop image"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="hidden lg:block relative w-full max-w-[711px] h-[650px] floating-laptop">
            <Image
              src="/images/home-page/laptop.png"
              alt="laptop image"
              fill
              className="object-contain lg:object-cover"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
