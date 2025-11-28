import Image from "next/image";

const Background8 = () => {
  return (
    <div className="relative h-full mt-20">
      <Image
        src="/images/background/gradient-3.png"
        alt="blur bg"
        fill
        className="object-fill object-center mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_10%,rgba(0,0,0,1)_20%)]"
      />
    </div>
  );
};

export default Background8;
