import Image from "next/image";

const Background6 = () => {
  return (
    <div className="w-full mt-80">
      <Image
        src="/images/background/gradient-2.png"
        alt="gradient 2"
        width={2000}
        height={600}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Background6;
