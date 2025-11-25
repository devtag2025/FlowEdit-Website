import Image from "next/image";

const Background7 = () => {
  return (
    <div className="w-full -mt-380">
      <Image
        src="/images/background/wave-3.png"
        alt="wave 3"
        width={2000}
        height={600}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Background7;
