import Container from "@/components/shared/Container";
import SiteButton from "@/components/shared/SiteButton";
import Image from "next/image";

const DualShowcase = () => {
  return (
    <Container className="flex flex-col gap-28">
      <div className="flex items-center justify-between gap-28">
        <div className="relative w-[608px] h-[484px]">
          {/* Big image */}
          <Image
            src="/images/home-page/workflow-3.png"
            alt="workflow main"
            fill
            className="absolute object-cover rounded-2xl"
          />

          {/* Small image on top */}
          <div className="absolute top-1/2 left-1/2 w-[580px] h-[456px] -translate-x-1/2 -translate-y-1/2 z-20 border border-[rgba(255, 255, 255, 0.33)] rounded-2xl">
            <Image
              src="/images/home-page/workflow-3.png"
              alt="workflow overlay"
              fill
              className="absolute object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-[54px] -tracking-[0.04em] text-black max-w-xl">
            Duis convallis elit blandit turpis
          </h1>

          <p className="text-lg leading-[133%] text-[rgba(0, 0, 0, 0.7)] max-w-lg">
            Tellus fermentum laoreet dignissim risus scelerisque pretium
            ullamcorper pretium. Sapien ut tellus ut hendrerit mauris. Varius
            dui sed vestibulum quis tellus egestas dolor eget magna. Dui
            imperdiet interdum parturient vitae. Nunc gravida lobortis ut ut in
            nisl facilisis amet. Aenean feugiat ultrices mauris gravida iaculis.
            Amet sem.
          </p>

          <div className="w-fit">
            <SiteButton>Start for Free</SiteButton>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center justify-between gap-28">
        <div className="relative w-[608px] h-[484px]">
          {/* Big image */}
          <Image
            src="/images/home-page/workflow-2.png"
            alt="workflow main"
            fill
            className="absolute object-cover rounded-2xl"
          />

          {/* Small image on top */}
          <div className="absolute top-1/2 left-1/2 w-[580px] h-[456px] -translate-x-1/2 -translate-y-1/2 z-20 border border-[rgba(255, 255, 255, 0.33)] rounded-2xl">
            <Image
              src="/images/home-page/workflow-2.png"
              alt="workflow overlay"
              fill
              className="absolute object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-[54px] -tracking-[0.04em] text-black max-w-xl">
            Duis convallis elit blandit turpis
          </h1>

          <p className="text-lg leading-[133%] text-[rgba(0, 0, 0, 0.7)] max-w-lg">
            Tellus fermentum laoreet dignissim risus scelerisque pretium
            ullamcorper pretium. Sapien ut tellus ut hendrerit mauris. Varius
            dui sed vestibulum quis tellus egestas dolor eget magna. Dui
            imperdiet interdum parturient vitae. Nunc gravida lobortis ut ut in
            nisl facilisis amet. Aenean feugiat ultrices mauris gravida iaculis.
            Amet sem.
          </p>

          <div className="w-fit">
            <SiteButton>Start for Free</SiteButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DualShowcase;
