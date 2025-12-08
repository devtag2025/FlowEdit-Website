"use client";

import { ReactNode, useEffect, useState } from "react";

interface FluidContainerProps {
  children: ReactNode;
}

const FluidContainer = ({ children }: FluidContainerProps) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const baseWidth = 1440;

      // Only scale for screens > 1440px
      // For screens <= 1440px: Keep existing responsive design (no scaling)
      if (viewportWidth > baseWidth) {
        const scaleValue = viewportWidth / baseWidth;
        setScale(scaleValue);
      } else {
        // Screens <= 1440px: No scaling, use existing responsive design
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ maxWidth: "100vw" }}>
      <div
        className="relative mx-auto"
        style={{
          width: scale !== 1 ? "1440px" : "100%",
          maxWidth: scale !== 1 ? "1440px" : "100%",
          transform: scale !== 1 ? `scale(${scale})` : "none",
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FluidContainer;

