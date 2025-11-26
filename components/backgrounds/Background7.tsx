import Image from "next/image";

const Background7 = () => {
  return (
    <div className="relative h-screen -mt-180 lg:-mt-200">
      <Image
        src="/images/background/wave-3.png"
        alt="blur bg"
        fill
        className="object-cover lg:object-fill lg:object-top"
      />
    </div>
  );
};

export default Background7;
