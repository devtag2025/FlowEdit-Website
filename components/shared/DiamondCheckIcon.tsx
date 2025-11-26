import { Check } from "lucide-react";
import React from "react";

const DiamondCheckIcon = () => {
  return (
    <div
      className="
        w-8 h-8 
        bg-transparent
        rounded-[32%] 
        border border-[#dcdde2]
        shadow-[0_0_0_4px_rgba(0,0,0,0.04)]
        flex items-center justify-center
      "
      style={{
        transform: "rotate(45deg)",
      }}
    >
      <div
        style={{ transform: "rotate(-45deg)" }}
        className="text-black font-bold"
      >
        <Check className="size-7" />
      </div>
    </div>
  );
};

export default DiamondCheckIcon;
