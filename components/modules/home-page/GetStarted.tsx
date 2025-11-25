import SiteButton from "@/components/shared/SiteButton";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div className="w-full flex justify-center mt-20">
      {/* Glass container */}
      <div
        className="
          relative w-[1056px] h-[193px]
          rounded-2xl overflow-hidden
          backdrop-blur-[20px]
          bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))]
          shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)]
        "
      >
        {/* Glow image */}
        <Image
          src="/images/home-page/glow.png"
          alt="glow"
          fill
          className="object-cover"
        />

        {/* White overlay (softens glow) */}
        <div className="absolute inset-0 bg-white/30 pointer-events-none" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-between px-12">
          <h1 className="font-semibold text-[54px] -tracking-[0.04em] text-black">
            Ready to get started?
          </h1>
          <SiteButton>Start for Free</SiteButton>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
