import PortfolioBackground4 from "@/components/backgrounds/PortfolioBackground4";
import PortfolioBackground5 from "@/components/backgrounds/PotfolioBackground5";
import Container from "@/components/shared/Container";
import SiteButton from "@/components/shared/SiteButton";
import Image from "next/image";

const PortfolioShowcase = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-full px-4">
        <Container className="">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-24 max-w-full">
            <div className="w-full lg:w-1/2 rounded-2xl">
              <div className="relative w-full aspect-4/3 lg:h-full">
                <Image
                  src="/images/home-page/workflow-2.png"
                  alt="showcase image big"
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] border border-[rgba(255,255,255,0.33)] rounded-2xl">
                  <Image
                    src="/images/home-page/workflow-2.png"
                    alt="showcase image big"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h1 className="font-semibold text-[36px] lg:text-[54px] -tracking-[0.04em] text-black max-w-xl">
                Duis convallis elit blandit turpis
              </h1>
              <p className="font-normal text-lg leading-[133%] text-[rgba(0,0,0,0.7)] md:max-w-2xl lg:max-w-lg">
                Tellus fermentum laoreet dignissim risus scelerisque pretium
                ullamcorper pretium. Sapien ut tellus ut hendrerit mauris.
                Varius dui sed vestibulum quis tellus egestas dolor eget magna.
                Dui imperdiet interdum parturient vitae. Nunc gravida lobortis
                ut ut in nisl facilisis amet. Aenean feugiat ultrices mauris
                gravida iaculis. Amet sem.
              </p>

              <div className="w-full lg:w-fit">
                <SiteButton className="w-full bg-[#B6C7F5]/30 hover:bg-[#B6C7F5]/30">
                  Start for Free
                </SiteButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
