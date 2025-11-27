import Image from "next/image";

const Background7 = () => {
  return (
    <div className="relative -top-[108%] h-screen">
      <Image
        src="/images/background/wave-3.png"
        alt="blur bg"
        fill
        className="object-left object-cover lg:object-fill"
      />
    </div>
  );
};

export default Background7;
