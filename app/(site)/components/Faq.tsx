"use client";

import FaqAccordion from "@/components/sections/FaqAccordion";
import PageHeaderButton from "@/components/shared/PageHeaderButton";
import GetStarted from "./GetStarted";
import { usePathname } from "next/navigation";

const Faq = () => {
  const pathname = usePathname();
  return (
    <div className="w-full bg-blue-700">
      <div
        className={`mx-auto w-full px-2.5 md:px-0 max-w-[1216px] flex flex-col items-center text-center bg-white ${
          pathname === "/portfolio"
            ? "pt-[69px] lg:pt-[120px] pb-[50px]"
            : "pt-10 lg:pt-[180px] pb-[102px]"
        }`}
      >
      <div className="flex flex-col items-center text-center gap-8 sm:gap-10">
        <div className="flex flex-col items-center gap-4 sm:gap-5 max-w-2xl">
          <PageHeaderButton text="FAQs" className="mb-4" />

          <h1 className="font-semibold text-3xl sm:text-4xl md:text-[54px] -tracking-[0.04em] text-black">
            Frequently asked questions
          </h1>

          <p className="text-sm sm:text-base leading-[150%] text-[rgba(0,0,0,0.7)] max-w-md sm:max-w-lg md:max-w-xl">
            Find quick answers to common questions and make the most of Maps
            Explore’s key features, from traffic updates to emergency alerts
          </p>
        </div>

        <FaqAccordion />
      </div>

      <div
        className={`w-full overflow-hidden rounded-2xl ${
          pathname === "/portfolio" ? "pt-[57px] lg:py-10" : "pt-[94px] pb-10"
        }`}
      >
        <GetStarted />
      </div>
      </div>
    </div>
  );
};

export default Faq;
