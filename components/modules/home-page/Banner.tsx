import PageHeaderButton from "@/components/shared/PageHeaderButton";
import SiteButton from "@/components/shared/SiteButton";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

const Banner = () => {
  return (
    <div
      className="
        flex flex-col items-center text-center 
        gap-11 sm:gap-6 md:gap-7 
        mt-12 
        px-4 pt-5
        h-[70vh]
      "
    >
      {/* Rating Button */}
      <PageHeaderButton
        text="Loved by 4.5 out of 5 Creators"
        icons={[
          <IoMdStar key="1" />,
          <IoMdStar key="2" />,
          <IoMdStar key="3" />,
          <IoMdStar key="4" />,
          <IoMdStarHalf key="5" />,
        ]}
      />
      <div className="flex flex-col gap-8 items-center">
        {/* MAIN TITLE */}
        <h1
          className="
          font-semibold 
          text-white 
          text-shadow-[0_30px_60px_rgba(0,0,0,0.5)]
          max-w-xl sm:max-w-2xl md:max-w-4xl
          
          text-5xl sm:text-4xl md:text-5xl lg:text-7xl
          leading-[120%]
          tracking-[4%]
        "
        >
          Post Better Videos - Faster. Skip the Editing.
        </h1>

        {/* DESCRIPTION TEXT */}
        <p
          className="
          text-white 
          leading-[150%]
          max-w-[20rem] sm:max-w-lg md:max-w-3xl lg:max-w-5xl

          text-sm sm:text-base md:text-lg lg:text-xl
        "
        >
          We’ll edit anything, fast-optimized for any platform. Just drop your
          footage, and we’ll turn it into content that gets views and drives
          growth—with zero effort on your part.
        </p>

        {/* BUTTON */}
        <div className="w-full sm:w-fit shadow-2xl">
          <SiteButton className="w-full sm:w-auto">Start for Free</SiteButton>
        </div>

        {/* SUBTEXT */}
        <p
          className="
          text-white 
          max-w-60 sm:max-w-sm md:max-w-md 
          
          text-xs sm:text-sm md:text-base 
          leading-[150%]
        "
        >
          14-Day free access to professional video editing team
        </p>
      </div>
    </div>
  );
};

export default Banner;
