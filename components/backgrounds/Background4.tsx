import Image from "next/image";

const Background4 = () => {
  return (
    <div className="relative h-screen mt-56">
      <Image
        src="/images/background/gradient-2.png"
        alt="blur bg"
        fill
        className="object-fill object-top"
      />
    </div>
  );
};

export default Background4;
