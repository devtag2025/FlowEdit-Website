"use client";

import FaqAccordion from "@/components/sections/FaqAccordion";
import PageHeaderButton from "@/components/shared/PageHeaderButton";
import GetStarted from "./GetStarted";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/types/siteSettings";

interface FaqItem {
  _id: string;
  question: string;
  answer: any; // Portable text array
}

interface FaqProps {
  headerButtonText?: string;
  title?: string;
  description?: string;
  faqs?: FaqItem[];
  getStartedTitle?: string;
  getStartedCta?: Button;
}

const Faq = ({
  headerButtonText = "FAQs",
  title = "Frequently asked questions",
  description = "Find quick answers to common questions and make the most of Maps Explore's key features, from traffic updates to emergency alerts",
  faqs = [],
  getStartedTitle = "Ready to get started?",
  getStartedCta,
}: FaqProps) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full relative overflow-hidden lg:h-[1700px] lg:-my-[100px] lg:-mb-[180px]">
      {/* Background Image - Hardcoded */}
      <Image
        src="/homepage/faqbg.svg"
        alt="faq background"
        fill
        priority
        className="absolute top-0 left-0 right-0 bottom-0 w-screen h-full z-0"
        sizes="100vw"
        style={{
          objectFit: isMobile ? "cover" : "contain",
          objectPosition: "top left",
          maskImage: "linear-gradient(to bottom, transparent 0%, transparent 10%, black 40%, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 10%, black 40%, black 70%, transparent 100%)",
        }}
      />
      
      <div
        className={`mx-auto w-full px-2.5 md:px-0 max-w-[1216px] flex flex-col items-center text-center relative z-10 h-full lg:justify-center ${
          pathname === "/portfolio"
            ? "pt-[69px] lg:pt-0 pb-12 lg:pb-[50px]"
            : "pt-1 lg:pt-0 pb-[4px] lg:pb-[102px]"
        }`}
      >
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center text-center gap-8 sm:gap-10">
            <div className="flex flex-col items-center gap-4 sm:gap-5 max-w-2xl">
              {headerButtonText && (
                <PageHeaderButton text={headerButtonText} className="mb-4" />
              )}

              {title && (
                <h1 className="font-semibold text-3xl sm:text-4xl md:text-[54px] -tracking-[0.04em] text-black">
                  {title}
                </h1>
              )}

              {description && (
                <p className="text-sm sm:text-base leading-[150%] text-[rgba(0,0,0,0.7)] max-w-md sm:max-w-lg md:max-w-xl">
                  {description}
                </p>
              )}
            </div>

            <FaqAccordion faqs={faqs} />
          </div>

          <div
            className={`w-full overflow-hidden rounded-2xl mt-20 ${
              pathname === "/portfolio"
                ? "mt-10 lg:mt-20 pt-[57px] lg:py-10"
                : "mt-10 lg:mt-20 pt-[94px] pb-10"
            }`}
          >
            <GetStarted title={getStartedTitle} cta={getStartedCta} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
