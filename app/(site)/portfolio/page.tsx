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

  // Prefetch heavy assets up-front to avoid visible lazy loading on scroll
  useEffect(() => {
    const imagesToPreload = [
      "/portfolio-bg.jpg",
      "/homepage/projectsbg.svg",
      "/homepage/duisbg.svg",
      "/images/home-page/workflow-2.png",
      "/images/home-page/workflow-3.png",
    ];
    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative bg-white w-full">
      <div className="w-full relative lg:pb-20">
      <Image
        src="/portfolio-bg.jpg"
        alt="background"
        fill
        className="object-cover object-top -z-10"
        priority
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
