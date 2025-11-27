import Image from "next/image";

const Background2 = () => {
  return (
    <div className="relative -top-[60%] h-screen">
      <Image
        src="/images/background/wave-3.png"
        alt="wave bg"
        fill
        className="object-left object-cover lg:object-fill"
      />
    </div>
  );
};

export default Background2;
