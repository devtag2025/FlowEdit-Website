"use client";

import PriceBanner from "./components/PriceBanner";
import PriceCarosel from "./components/PriceCarosel/PriceCarosel";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";
import { useState } from "react";

const PricingPage = () => {
  const [discountApplied, setDiscountApplied] = useState(true);

  return (
    <div className="relative lg:pb-24">
      <Navbar />
      <Image
        src="/pricing-bg.jpg"
        alt="background"
        fill
        className="object-cover object-top -z-10"
      />
      <PriceBanner onToggleChange={setDiscountApplied} />
      <PriceCarosel discountApplied={discountApplied} />
      <Footer />
    </div>
  );
};

export default PricingPage;
