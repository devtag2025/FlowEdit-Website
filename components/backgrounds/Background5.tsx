import Image from "next/image";

const Background5 = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/images/background/wave-3.png"
        alt="gradient 2"
        width={2000}
        height={600}
        className="absolute -top-200 object-cover z-10"
      />
    </div>
  );
};

export default Background5;
