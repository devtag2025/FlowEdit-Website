import Image from "next/image";

const Background7 = () => {
  return (
    <div className="absolute inset-0 top-0">
      <Image
        src="/images/background/wave-3.png"
        alt="blur bg"
        fill
        className="object-left object-cover lg:object-fill"
      />
    </div>
  );
};

export default Background7;
