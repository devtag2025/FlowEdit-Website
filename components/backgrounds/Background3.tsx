import Image from "next/image";

const Background3 = () => {
  return (
    <div className="w-full h-screen">
      <Image
        src="/images/background/wallpaper-blur.png"
        alt="wave"
        width={2000} // IMPORTANT: Do NOT use fill
        height={800}
        className="absolute left-1/2 -translate-x-1/2 top-40 z-10 object-cover"
      />
    </div>
  );
};

export default Background3;
