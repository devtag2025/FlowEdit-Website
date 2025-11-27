import Image from "next/image";

const PortfolioBackground5 = () => {
  return (
    <div className="relative -top-full h-screen">
      <Image
        src="/images/background/wave-3.png"
        alt="wave bg"
        fill
        className="object-left object-cover lg:object-fill"
      />
    </div>
  );
};

export default PortfolioBackground5;
