import Image from "next/image";

const PriceBackground2 = () => {
  return (
    <div className="relative -top-[80%] h-screen">
      <Image
        src="/images/background/wave-3.png"
        alt="wave bg"
        fill
        className="object-left object-cover lg:object-fill"
      />
    </div>
  );
};

export default PriceBackground2;
