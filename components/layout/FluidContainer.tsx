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

      // For screens >= 768px: Scale 1440px design to fill full viewport width
      // Maintains 100% ratio, fills entire screen, no white space
      if (viewportWidth >= 768) {
        const scaleValue = viewportWidth / baseWidth;
        setScale(scaleValue);
      } else {
        // Mobile (< 768px): Use existing responsive design (no scaling)
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="w-screen min-h-screen overflow-x-hidden" style={{ width: "100vw" }}>
      <div
        className="relative mx-auto"
        style={{
          width: "1440px",
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FluidContainer;

