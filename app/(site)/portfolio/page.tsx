"use client";

import Faq from "../components/Faq";
import LovedByCreatorsSection from "../components/LovedByCreatorsSection";
import PortfolioBanner from "./components/PortfolioBanner";
import PortfolioShowcase from "./components/PortfolioShowcase";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";
import { useEffect } from "react";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-[1440px] relative lg:pb-20">
        <Image
          src="/portfolio-bg.jpg"
          alt="background"
          fill
          className="object-cover object-top -z-10"
        />
        <Navbar />
        <PortfolioBanner />
        <PortfolioShowcase />
        <LovedByCreatorsSection />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioPage;
