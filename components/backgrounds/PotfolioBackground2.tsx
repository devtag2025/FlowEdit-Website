import Image from "next/image";

const PortfolioBackground2 = () => {
  return (
    <div className="relative -top-[105%] h-screen">
      <Image
        src="/images/background/wave-3.png"
        alt="wave bg"
        fill
        className="object-left object-cover lg:object-fill"
      />
    </div>
  );
};

export default PortfolioBackground2;
