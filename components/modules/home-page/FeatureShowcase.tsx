import Background2 from "@/components/backgrounds/Background2";
import Background3 from "@/components/backgrounds/Background3";
import Container from "@/components/shared/Container";

import Image from "next/image";

const FeatureShowcase = () => {
  return (
    <div className="relative h-screen">
      <Background2 />
      <Background3 />
      <Container className="absolute top-0 w-full h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-semibold text-black -tracking-[0.04em] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] whitespace-nowrap">
            Effortless Video
          </h1>

          <h4 className="font-semibold text-black -tracking-[0.04em] max-w-80 mx-auto lg:mx-0 text-lg sm:text-xl md:text-[24px] lg:text-[28px]">
            The perfect tool for your creative mind
          </h4>

          <p className="text-black leading-[150%] max-w-md sm:max-w-108 text-sm sm:text-base md:text-lg mx-auto lg:mx-0">
            Regular video posts equals more reach. With FlowEdit, you get a
            steady stream of high-quality, platform-optimized videos that keep
            your audience engaged and your brand top-of-mind.
          </p>
        </div>

        <div className="relative w-full h-[450px] block lg:hidden overflow-hidden">
          <Image
            src="/images/home-page/laptop.png"
            alt="laptop image"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="hidden lg:block relative w-full max-w-[711px] h-[650px]">
          <Image
            src="/images/home-page/laptop.png"
            alt="laptop image"
            fill
            className="object-contain lg:object-cover"
          />
        </div>
      </Container>
    </div>
  );
};

export default FeatureShowcase;
