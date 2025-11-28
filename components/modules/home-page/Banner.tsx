"use client";

import Container from "@/components/shared/Container";
import PageHeaderButton from "@/components/shared/PageHeaderButton";
import SiteButton from "@/components/shared/SiteButton";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import SplitType from "split-type";
import FeatureShowcase from "./FeatureShowcase";

const Banner = () => {
  const pathname = usePathname();

  useEffect(() => {
    const split = new SplitType(".hero-title", {
      types: "words",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(split.words, {
        opacity: 0,
        y: 40,
        duration: 1.1,
        stagger: 0.05,
      })
        .from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.9 }, "-=0.4")
        .from(
          ".hero-button",
          { opacity: 0, scale: 0.9, duration: 0.8 },
          "-=0.3"
        )
        .from(
          ".hero-bottom-text",
          { opacity: 0, y: 20, duration: 0.8 },
          "-=0.4"
        );
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [pathname]);

  return (
    <div className="w-full pb-[134px] z-10">
      <Container>
        <div className="w-full ">
          <div className="flex flex-col items-center justify-center text-center gap-11 sm:gap-6 md:gap-7 mt-12 px-4 pt-5  w-full">
            <PageHeaderButton
              text="Loved by 4.5 out of 5 Creators"
              icons={[
                <IoMdStar key="1" />,
                <IoMdStar key="2" />,
                <IoMdStar key="3" />,
                <IoMdStar key="4" />,
                <IoMdStarHalf key="5" />,
              ]}
            />

            <div className="flex flex-col gap-8 z-40 items-center">
              <h1 className="hero-title font-semibold text-white max-w-xl sm:max-w-2xl md:max-w-4xl text-5xl sm:text-4xl md:text-5xl lg:text-7xl leading-[120%] tracking-[4%]">
                Post Better Videos - Faster. Skip the Editing.
              </h1>

              <p className="hero-subtitle text-white leading-[150%] max-w-[20rem] sm:max-w-lg md:max-w-3xl lg:max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl">
                We’ll edit anything, fast-optimized for any platform. Just drop
                your footage, and we’ll turn it into content that gets views and
                drives growth—with zero effort on your part.
              </p>

              <div className="w-fit shadow-2xl">
                <SiteButton className="bg-[#B6C7F5]/30 hover:bg-[#B6C7F5]/30">
                  Start for Free
                </SiteButton>
              </div>

              <p className="hero-bottom-text text-white max-w-60 sm:max-w-sm md:max-w-md text-xs sm:text-sm md:text-base leading-[150%]">
                14-Day free access to professional video editing team
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="">
        <FeatureShowcase />
      </div>
    </div>
  );
};

export default Banner;
