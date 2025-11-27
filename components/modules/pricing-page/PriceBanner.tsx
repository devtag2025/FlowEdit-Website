"use client";

import PageHeaderButton from "@/components/shared/PageHeaderButton";
import ToggleSwitch from "@/components/shared/ToggleSwitch";

const PriceBanner = () => {
  return (
    <div className="mt-11">
      <div className="flex flex-col gap-5 items-center">
        <div className="w-fit">
          <PageHeaderButton text="Pricing" />
        </div>
        <h1 className="font-semibold text-[44px] leading-[118%] lg:text-[73px] -tracking-[0.04em] text-white text-center lg:text-left">
          Stop Editing. <br className="block lg:hidden" /> Start growing
        </h1>

        <p className="text-base lg:text-xl leading-[150%] text-white max-w-92 lg:max-w-2xl text-center lg:text-left">
          As we grow our library of UI components, we’re introducing a
          limited-time pricing that’s not only 50% off but also significantly
          cheaper than what’s on the market
        </p>

        <div className="flex items-center gap-3.5">
          <p className="text-lg lg:text-xl leading-[150%] text-white">Unlock</p>

          <ToggleSwitch
            checked={true}
            onChange={(value) => console.log("Toggled:", value)}
          />
          <p className="text-lg lg:text-xl leading-[150%] text-white">
            35% savings
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceBanner;
