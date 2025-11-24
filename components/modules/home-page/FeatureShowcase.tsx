import Image from "next/image";

const FeatureShowcase = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="font-semibold text-[54px] -tracking-[0.04em] text-black">
          Effortless Video
        </h1>

        <h4 className="font-semibold text-[28px] -tracking-[0.04em] text-black max-w-80">
          The perfect tool for your creative mind
        </h4>

        <p className="text-lg leading-[133%] text-black max-w-108">
          Regular video posts equals more reach. With FlowEdit, you get a steady
          stream of high-quality, platform-optimized videos that keep your
          audience engaged and your brand top-of-mind. Our team handles the
          edits, thumbnails, and even posting - so your channels never go quiet
          and you stay focused on creating.
        </p>
      </div>
      <div className="relative w-[711px] h-[741px]">
        <Image
          src="/images/home-page/laptop.png"
          alt="laptop image"
          fill
          className="absolute object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureShowcase;
