"use client";

import { NotFoundPage as NotFoundPageType } from "@/types/siteSettings";
import SiteButton from "./SiteButton";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NotFoundPageProps {
  notFoundPage?: NotFoundPageType;
}

const NotFoundPage = ({ notFoundPage }: NotFoundPageProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const errorCode = notFoundPage?.errorCode || "404";
  const title = notFoundPage?.title || "Page Not Found";
  const description =
    notFoundPage?.description ||
    "Oops! The page you're looking for seems to have wandered off into the digital void. Let's get you back on track.";
  const ctaButtons = notFoundPage?.cta || [];
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#6283ea] via-[#4069E4] to-[#2670e9] opacity-90"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(98, 131, 234, 0.8) 0%, rgba(64, 105, 228, 0.6) 50%, rgba(38, 112, 233, 0.4) 100%)`,
        }}
      />

      {/* Animated Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-72 h-72 bg-[#B6C7F5]/30 rounded-full blur-2xl"
          style={{
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.4s ease-out",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center">
        {/* Error Code */}
        <div className="mb-8 relative">
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-bold text-white/90 leading-none tracking-tight relative z-10">
            {errorCode}
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-[120px] sm:text-[180px] md:text-[220px] font-bold text-white/10 blur-sm">
              {errorCode}
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 max-w-2xl">
          {title}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
          {description}
        </p>

        {/* CTA Buttons */}
        {ctaButtons.length > 0 ? (
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {ctaButtons.map((button) => (
              <SiteButton key={button._key} button={button} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/">
              <SiteButton className="bg-[#B6C7F5] hover:bg-[#B6C7F5]/90 text-black px-8 py-4 text-base">
                Go Back Home
              </SiteButton>
            </Link>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-white/40 animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "1.5s",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFoundPage;
