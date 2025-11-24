import Image from "next/image";

const Background4 = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/images/background/gradient-2.png"
        alt="gradient 2"
        width={2000}
        height={600}
        className="absolute -top-220 object-cover z-10"
      />
    </div>
  );
};

export default Background4;
