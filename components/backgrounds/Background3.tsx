import Image from "next/image";

const Background3 = () => {
  return (
    <div className="relative h-screen -mt-144 lg:-mt-140 bg-white/10">
      <Image
        src="/images/background/wallpaper-blur.png"
        alt="blur bg"
        fill
        className="object-cover object-left lg:object-fill lg:object-left"
      />
    </div>
  );
};

export default Background3;
