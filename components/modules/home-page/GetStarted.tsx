import SiteButton from "@/components/shared/SiteButton";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div className="w-full flex justify-center mt-20 px-4">
      {/* Glass container */}
      <div
        className="
          relative 
          w-full 
          max-w-[1056px] 
          
          rounded-2xl 
          overflow-hidden 
          backdrop-blur-[20px]
          bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))]
          shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)]

          h-auto 
          py-10 
          sm:py-14
          md:h-[193px]
        "
      >
        {/* Glow image */}
        <Image
          src="/images/home-page/glow.png"
          alt="glow"
          fill
          className="object-cover"
        />

        {/* White overlay */}
        <div className="absolute inset-0 bg-white/30 pointer-events-none" />

        {/* Content */}
        <div
          className="
            relative z-10 
            flex 
            flex-col md:flex-row 
            items-center 
            justify-center md:justify-between 
            gap-6 md:gap-0
            px-6 sm:px-10 md:px-12 
            text-center md:text-left
          "
        >
          <h1
            className="
              font-semibold text-black -tracking-[0.04em]
              
              text-3xl 
              sm:text-4xl 
              md:text-[54px] 
              
              max-w-[20rem] sm:max-w-none
            "
          >
            Ready to get started?
          </h1>

          <div className="w-full md:w-fit">
            <SiteButton className="w-full md:w-auto">Start for Free</SiteButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
