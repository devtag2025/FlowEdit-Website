import SiteButton from "@/components/shared/SiteButton";

const PortfolioBanner = () => {
  return (
    <div className="relative ">
      <div className="w-full h-full">
        <div className="h-full flex flex-col items-center justify-center gap-6 mt-10 lg:mb-0">
          <h1 className="font-semibold text-[44px] lg:text-[73px] leading-[118%] -tracking-[0.04em] text-white text-center lg:text-left">
            Check out our <br className="block lg:hidden" /> portfolio
          </h1>
          <p className="font-normal text-lg lg:text-xl leading-[150%] text-white max-w-5xl text-center">
            Nullam egestas et in tristique faucibus. Mauris quis posuere lorem
            tincidunt phasellus auctor tortor. Sit id neque tincidunt ac nibh
            varius aliquam tincidunt. Habitant egestas donec diam scelerisque
            donec aenean odio mattis. Lacus tempus est congue ultricies in
            vestibulum aenean. Enim aliquet nunc hac eget.
          </p>
          <div className="w-fit">
            <SiteButton>View Projects</SiteButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
