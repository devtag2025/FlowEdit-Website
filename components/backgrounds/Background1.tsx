import Image from "next/image";

const Background1 = () => {
  return (
    <div className="w-full h-screen">
      <Image
        src="/images/background/gradient.png"
        alt="gradient"
        fill
        className="absolute inset-0 object-cover z-10"
      />
    </div>
  );
};

export default Background1;
