import Image from "next/image";

const PortfolioBackground4 = () => {
  return (
    <div className="relative -top-35 h-screen">
      <Image
        src="/images/background/gradient-2.png"
        alt="blur bg"
        fill
        className="object-fill object-top"
      />
    </div>
  );
};

export default PortfolioBackground4;
