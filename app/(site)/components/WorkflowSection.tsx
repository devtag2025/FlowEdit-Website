"use client";

import Image from "next/image";
import SiteButton from "@/components/shared/SiteButton";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/types/siteSettings";

interface WorkflowItem {
  _key: string;
  title: string;
  description: string;
  image?: any;
}

interface ShowcaseSection {
  _key: string;
  title: string;
  description: string;
  image?: any;
  cta?: Button;
  imagePosition?: "left" | "right";
}

interface WorkflowSectionProps {
  title?: string;
  backgroundImage?: any;
  workflowItems?: WorkflowItem[];
  showcaseSections?: ShowcaseSection[];
}

const WorkflowSection = ({
  title = "A Simple Powerful Workflow",
  backgroundImage,
  workflowItems = [],
  showcaseSections = [],
}: WorkflowSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getImageUrl = (image: any): string | null => {
    if (!image || !image.asset) return null;
    try {
      return urlFor(image).url() || null;
    } catch {
      return null;
    }
  };

  const getBackgroundImageUrl = (image: any): string | null => {
    if (!image || !image.asset) return "/homepage/workflowbg.png";
    try {
      return urlFor(image).url() || "/homepage/workflowbg.png";
    } catch {
      return "/homepage/workflowbg.png";
    }
  };

  const backgroundImageUrl = getBackgroundImageUrl(backgroundImage);

  return (
    <div className="w-full relative overflow-hidden -mt-20 md:-my-12">
      {/* Background Image */}
      {backgroundImageUrl && (
        <div className="absolute top-24 md:top-0 left-0 right-0 bottom-0 w-full h-full z-0">
          <Image
            src={backgroundImageUrl}
            alt={backgroundImage?.alt || "workflow background"}
            fill
            className="w-full h-full"
            style={{
              objectFit: isMobile ? 'cover' : 'contain',
              objectPosition: 'top',
            }}
            sizes="100vw"
            priority
          />
        </div>
      )}
      
      {/* Content */}
      <div className="mx-auto w-full px-2.5 md:px-0 max-w-[1216px] flex flex-col items-center gap-10 relative lg:mb-[50px] z-10 pt-6 md:pt-10 pb-10 lg:pb-0 z-20">
      {title && (
        <h1 className="font-semibold text-[34px] sm:text-[42px] md:text-[54px] -tracking-[0.04em] text-center pt-18">
          {title}
        </h1>
      )}

      {workflowItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch lg:-mb-[75px]">
          {workflowItems.map((item) => {
            const itemImageUrl = getImageUrl(item.image);
            return (
              <div
                key={item._key}
                className="p-2.5 flex flex-col gap-6 border border-[rgba(255,255,255,0.1)] backdrop-blur-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)] rounded-xl w-full h-full"
              >
                <div className="relative w-full h-[220px] sm:h-[241px]">
                  {itemImageUrl ? (
                    <Image
                      src={itemImageUrl}
                      alt={item.image?.alt || item.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 rounded-md flex items-center justify-center">
                      <span className="text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 px-2.5">
                  <h2 className="font-semibold text-2xl sm:text-3xl -tracking-[0.04em] capitalize">
                    {item.title}
                  </h2>
                  <p className="text-base leading-[150%] text-black/70">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* DualShowcase Section */}
      {showcaseSections.length > 0 && (
        <div className="mx-auto w-full px-2.5 md:px-0 max-w-[1216px] flex flex-col justify-between gap-16 lg:gap-28 relative z-10 mt-10 lg:mt-[284px] pb-10 lg:pb-0">
          {showcaseSections.map((showcase, index) => {
            const showcaseImageUrl = getImageUrl(showcase.image);
            const isReversed = showcase.imagePosition === "right";
            
            return (
              <div
                key={showcase._key}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} justify-between gap-10 lg:gap-24 max-w-full`}
              >
                {showcaseImageUrl && (
                  <div className="w-full lg:w-1/2 rounded-2xl">
                    <div className="relative w-full aspect-4/3 lg:h-full">
                      <Image
                        src={showcaseImageUrl}
                        alt={showcase.image?.alt || showcase.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] border border-[rgba(255,255,255,0.33)] rounded-2xl">
                        <Image
                          src={showcaseImageUrl}
                          alt={showcase.image?.alt || showcase.title}
                          fill
                          className="object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  {showcase.title && (
                    <h1 className="font-semibold text-[36px] lg:text-[54px] -tracking-[0.04em] text-black max-w-xl">
                      {showcase.title}
                    </h1>
                  )}
                  {showcase.description && (
                    <p className="font-normal text-lg leading-[133%] text-[rgba(0,0,0,0.7)] max-w-lg">
                      {showcase.description}
                    </p>
                  )}
                  {showcase.cta && (
                    <div className="w-full lg:w-fit">
                      <SiteButton
                        button={showcase.cta}
                        className="bg-[#B6C7F5]/15 hover:bg-[#B6C7F5]/15 shadow-lg w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      </div>
    </div>
  );
};

export default WorkflowSection;
