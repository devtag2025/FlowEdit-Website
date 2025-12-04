"use client";

import Faq from "../components/Faq";
import LovedByCreatorsSection from "../components/LovedByCreatorsSection";
import AllProjects from "./components/all-projects/AllProjects";
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
    <div className="relative pb-24">
      <Navbar />
      <Image
        src="/portfolio-bg.jpg"
        alt="background"
        fill
        className="object-cover object-top -z-10"
      />
      <PortfolioBanner />
      <AllProjects />
      <PortfolioShowcase />
      <LovedByCreatorsSection />
      <Faq />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
