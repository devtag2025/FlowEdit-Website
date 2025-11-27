import Image from "next/image";

const Background6 = () => {
  return (
    <div className="relative h-screen mt-320 lg:mt-235">
      <Image
        src="/images/background/gradient-2.png"
        alt="blur bg"
        fill
        className="object-fill object-top"
      />
    </div>
  );
};

export default Background6;
