import Image from "next/image";

const PortfolioBackground3 = () => {
  return (
    <div className="relative -top-full h-screen bg-white/10">
      <Image
        src="/images/background/wallpaper-blur.png"
        alt="blur bg"
        fill
        className="object-cover object-left lg:object-fill lg:object-left"
      />
    </div>
  );
};

export default PortfolioBackground3;
