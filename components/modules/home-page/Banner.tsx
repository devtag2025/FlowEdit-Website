import PageHeaderButton from "@/components/shared/PageHeaderButton";
import SiteButton from "@/components/shared/SiteButton";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

const Banner = () => {
  return (
    <div className="flex flex-col items-center gap-[25px] mt-12 text-center h-[55vh]">
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
      <h1 className="text-7xl -tracking-[0.04em] text-white text-shadow-[0_30px_60px_rgba(0,0,0,0.5)] font-semibold max-w-4xl">
        Post Better Videos - Faster. Skip the Editing.
      </h1>

      <p className="text-xl leading-[150%] text-white max-w-5xl">
        We’ll edit anything, fast-optimized for any platform. Just drop your
        footage, and we’ll turn it into content that gets views and drives
        growth-with zero effort on your part.
      </p>
      <div className="w-fit shadow-2xl">
        <SiteButton>Start for Free</SiteButton>
      </div>

      <p className="text-base leading-[150%] text-white max-w-76">
        14-Day free access to professional video editing team
      </p>
    </div>
  );
};

export default Banner;
