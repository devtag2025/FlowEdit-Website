"use client";

import PriceBanner from "./components/PriceBanner";
import PriceCarosel from "./components/PriceCarosel/PriceCarosel";
import { useState, useEffect } from "react";

interface PricingPageData {
  pricingData?: {
    banner?: {
      headerButtonText?: string;
      title?: string;
      description?: string;
      toggleLabel?: string;
      toggleSavingsText?: string;
    };
    pricingPlans?: Array<{
      _key?: string;
      title: string;
      price: number;
      priceLabel?: string;
      glow?: boolean;
      features: Array<{
        _key?: string;
        text: string;
        type: "check" | "minus";
      }>;
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
    }>;
    discountPercentage?: number;
  };
}

interface PricingPageProps {
  pageData?: PricingPageData;
}

const PricingPage = ({ pageData }: PricingPageProps) => {
  const [discountApplied, setDiscountApplied] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const pricingData = pageData?.pricingData;
  const bannerData = pricingData?.banner;
  const pricingPlans = pricingData?.pricingPlans || [];
  const discountPercentage = pricingData?.discountPercentage || 35;

  // Static background image path
  const backgroundImageUrl = "/homepage/pricingbg.svg";

  useEffect(() => {
    const img = new window.Image();
    img.src = backgroundImageUrl;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full relative min-h-screen overflow-hidden">
      {/* Gradient Background - Shows before image loads */}
      <div 
        className={`absolute inset-0 bg-linear-to-b from-[#4069E4] to-[rgba(255,255,255,0)] -z-20 transition-opacity duration-300 ${
          imageLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full min-h-screen z-0"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
          backgroundSize: isMobile ? "cover" : "100% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          maskImage: "linear-gradient(to bottom, black 0%, black 50%, black 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.1) 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 50%, black 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.1) 95%, transparent 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col space-y-12 lg:space-y-0">
        <PriceBanner 
          onToggleChange={setDiscountApplied} 
          bannerData={bannerData}
        />
        <PriceCarosel 
          discountApplied={discountApplied} 
          pricingPlans={pricingPlans}
          discountPercentage={discountPercentage}
        />
      </div>
    </div>
  );
};

export default PricingPage;
