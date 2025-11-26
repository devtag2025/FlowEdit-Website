import Container from "@/components/shared/Container";
import SiteButton from "@/components/shared/SiteButton";
import Image from "next/image";

const DualShowcase = () => {
  return (
    <Container className="flex flex-col gap-28">
      {/* SECTION 1 */}
      <div
        className="
          flex flex-col 
          lg:flex-row 
          items-center 
          justify-between 
          gap-12 
          lg:gap-28 mt-20
        "
      >
        {/* IMAGE BLOCK */}
        <div className="relative w-full max-w-[608px] h-[340px] sm:h-[420px] md:h-[460px] lg:h-[484px] mx-auto">
          {/* Big image */}
          <Image
            src="/images/home-page/workflow-3.png"
            alt="workflow main"
            fill
            className="absolute object-cover rounded-2xl"
          />

          {/* Small image on top */}
          <div
            className="
            absolute top-1/2 left-1/2 
            w-[95%] sm:w-[85%] md:w-[95%] 
            h-[95%] sm:h-[80%] md:h-[95%] 
            -translate-x-1/2 -translate-y-1/2 
            z-20 border border-[rgba(255, 255, 255, 0.33)] rounded-2xl
          "
          >
            <Image
              src="/images/home-page/workflow-3.png"
              alt="workflow overlay"
              fill
              className="absolute object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div className="flex flex-col gap-5 max-w-xl text-center lg:text-left">
          <h1 className="font-semibold text-[34px] sm:text-[44px] md:text-[54px] -tracking-[0.04em] text-black">
            Duis convallis elit blandit turpis
          </h1>

          <p className="text-base sm:text-lg leading-[150%] text-[rgba(0,0,0,0.7)]">
            Tellus fermentum laoreet dignissim risus scelerisque pretium
            ullamcorper pretium. Sapien ut tellus ut hendrerit mauris. Varius
            dui sed vestibulum quis tellus egestas dolor eget magna. Dui
            imperdiet interdum parturient vitae. Nunc gravida lobortis ut ut in
            nisl facilisis amet. Aenean feugiat ultrices mauris gravida iaculis.
            Amet sem.
          </p>

          <div className="w-fit mx-auto lg:mx-0">
            <SiteButton>Start for Free</SiteButton>
          </div>
        </div>
      </div>

      {/* SECTION 2 — reversed layout */}
      <div
        className="
          flex flex-col 
          lg:flex-row-reverse 
          items-center 
          justify-between 
          gap-12 
          lg:gap-28
        "
      >
        {/* IMAGE BLOCK */}
        <div className="relative w-full max-w-[608px] h-[340px] sm:h-[420px] md:h-[460px] lg:h-[484px] mx-auto">
          <Image
            src="/images/home-page/workflow-2.png"
            alt="workflow main"
            fill
            className="absolute object-cover rounded-2xl"
          />

          <div
            className="
            absolute top-1/2 left-1/2 
            w-[95%] sm:w-[85%] md:w-[95%] 
            h-[95%] sm:h-[80%] md:h-[95%] 
            -translate-x-1/2 -translate-y-1/2 
            z-20 border border-[rgba(255, 255, 255, 0.33)] rounded-2xl
          "
          >
            <Image
              src="/images/home-page/workflow-2.png"
              alt="workflow overlay"
              fill
              className="absolute object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div className="flex flex-col gap-5 max-w-xl text-center lg:text-left">
          <h1 className="font-semibold text-[34px] sm:text-[44px] md:text-[54px] -tracking-[0.04em] text-black">
            Duis convallis elit blandit turpis
          </h1>

          <p className="text-base sm:text-lg leading-[150%] text-[rgba(0,0,0,0.7)]">
            Tellus fermentum laoreet dignissim risus scelerisque pretium
            ullamcorper pretium. Sapien ut tellus ut hendrerit mauris. Varius
            dui sed vestibulum quis tellus egestas dolor eget magna. Dui
            imperdiet interdum parturient vitae. Nunc gravida lobortis ut ut in
            nisl facilisis amet. Aenean feugiat ultrices mauris gravida iaculis.
            Amet sem.
          </p>

          <div className="w-fit mx-auto lg:mx-0">
            <SiteButton>Start for Free</SiteButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DualShowcase;
