import Image from "next/image";

const Background5 = () => {
  return (
    <div className="relative h-screen mt-56 lg:-mt-160">
      <Image
        src="/images/background/wave-3.png"
        alt="blur bg"
        fill
        className="object-cover lg:object-fill object-bottom lg:object-left"
      />
    </div>
  );
};

export default Background5;
