import Container from "@/components/shared/Container";
import PageHeaderButton from "@/components/shared/PageHeaderButton";
import { BiSolidQuoteLeft } from "react-icons/bi";

const LovedByCreatorsSection = () => {
  return (
    <Container className="flex flex-col items-center justify-center gap-10 h-screen">
      <PageHeaderButton text="Testimonials" />
      <h1 className="font-semibold text-[54px] -tracking-[0.04em] text-black">
        Loved by creators
      </h1>
      <div className="flex items-center gap-6">
        <div className="border border-[rgba(255, 255, 255, 0.1)] rounded-[10px] px-6 py-8 backdrop-blur-[20px] shadow-[0_10px_10px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.05),0_1px_0_0_rgba(0,0,0,0.05)] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] flex flex-col gap-3">
          <BiSolidQuoteLeft className="text-5xl opacity-10" />
          <h1 className="font-semibold text-2xl leading-[140%] text-black">
            “The best in town”
          </h1>
          <p className="text-lg leading-[133%] text-[rgba(0,0,0,0.7)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet
            ullamcorper scelerisque
          </p>
          <div className="flex flex-col gap-2">
            <h6 className="text-lg leading-[162%] text-black">Emerson Saris</h6>
            <p className="font-normal text-sm leading-[150%] text-black">
              58, California, USA
            </p>
          </div>
        </div>

        <div className="border border-[rgba(255, 255, 255, 0.1)] rounded-[10px] px-6 py-8 backdrop-blur-[20px] shadow-[0_10px_10px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.05),0_1px_0_0_rgba(0,0,0,0.05)] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] flex flex-col gap-3">
          <BiSolidQuoteLeft className="text-5xl opacity-10" />
          <h1 className="font-semibold text-2xl leading-[140%] text-black">
            “Finance is now easy!”
          </h1>
          <p className="text-lg leading-[133%] text-[rgba(0,0,0,0.7)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet
            ullamcorper scelerisque
          </p>
          <div className="flex flex-col gap-2">
            <h6 className="text-lg leading-[162%] text-black">Emerson Saris</h6>
            <p className="font-normal text-sm leading-[150%] text-black">
              58, California, USA
            </p>
          </div>
        </div>

        <div className="border border-[rgba(255, 255, 255, 0.1)] rounded-[10px] px-6 py-8 backdrop-blur-[20px] shadow-[0_10px_10px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.05),0_1px_0_0_rgba(0,0,0,0.05)] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] flex flex-col gap-3">
          <BiSolidQuoteLeft className="text-5xl opacity-10" />
          <h1 className="font-semibold text-2xl leading-[140%] text-black">
            “They made it easy”
          </h1>
          <p className="text-lg leading-[133%] text-[rgba(0,0,0,0.7)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet
            ullamcorper scelerisque
          </p>
          <div className="flex flex-col gap-2">
            <h6 className="text-lg leading-[162%] text-black">Emerson Saris</h6>
            <p className="font-normal text-sm leading-[150%] text-black">
              58, California, USA
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LovedByCreatorsSection;
