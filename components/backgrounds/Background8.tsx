import Image from "next/image";

const Background8 = () => {
  return (
    <div className="relative h-screen mt-20">
      <Image
        src="/images/background/gradient-3.png"
        alt="blur bg"
        fill
        className="object-fill object-top"
      />
    </div>
  );
};

export default Background8;
