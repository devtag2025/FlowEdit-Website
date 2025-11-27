import Image from "next/image";

const Background1 = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/background/gradient.png"
        alt="banner bg"
        fill
        className="object-fill object-top"
        priority
      />
      <Image
        src="/images/background/spider-wave.png"
        alt="spidy bg"
        fill
        className="object-cover object-top block lg:hidden z-10"
        priority
      />
    </div>
  );
};

export default Background1;
