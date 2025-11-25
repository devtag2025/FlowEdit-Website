import Image from "next/image";

const Background8 = () => {
  return (
    <div className="relative w-full -mt-20 h-[1100px] overflow-hidden">
      {/* Background image */}

      <Image
        src="/images/background/gradient-3.png"
        alt="wave 3"
        fill
        className="object-cover"
      />

      {/* Top fade overlay */}
      {/* TOP fade (white → transparent) */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-linear-to-b from-white/90 to-transparent pointer-events-none" />

      {/* BOTTOM fade (white → transparent from bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-linear-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default Background8;
