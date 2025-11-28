import Background8 from "@/components/backgrounds/Background8";
import FaqAccordion from "@/components/sections/FaqAccordion";
import Container from "@/components/shared/Container";
import PageHeaderButton from "@/components/shared/PageHeaderButton";

const Faq = () => {
  return (
    <div className="relative h-screen -mt-48 mb-20">
      <Background8 />
      <Container className="absolute top-0 z-20 flex flex-col items-center text-center gap-8 sm:gap-10 px-4 py-16">
        <div className="flex flex-col items-center gap-4 sm:gap-5 max-w-2xl">
          <PageHeaderButton text="FAQs" />

          <h1 className="font-semibold text-3xl sm:text-4xl md:text-[54px] -tracking-[0.04em] text-black">
            Frequently asked questions
          </h1>

          <p className="text-sm sm:text-base leading-[150%] text-[rgba(0,0,0,0.7)] max-w-md sm:max-w-lg md:max-w-xl">
            Find quick answers to common questions and make the most of Maps
            Explore’s key features, from traffic updates to emergency alerts
          </p>
        </div>

        <FaqAccordion />
      </Container>
    </div>
  );
};

export default Faq;
