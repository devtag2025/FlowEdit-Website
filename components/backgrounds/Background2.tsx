import Image from "next/image";

const Background2 = () => {
  return (
    <div className="w-full h-screen">
      <Image
        src="/images/background/wave-3.png"
        alt="wave"
        width={2000} // IMPORTANT: Do NOT use fill
        height={1200}
        className="absolute left-0 top-52 z-20 object-cover"
      />
    </div>
  );
};

export default Background2;
