import FaqAccordion from "@/components/sections/FaqAccordion";
import PageHeaderButton from "@/components/shared/PageHeaderButton";

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-10 h-screen">
      <div className="flex flex-col items-center gap-5">
        <PageHeaderButton text="FAQs" />
        <h1 className="font-semibold text-[54px] -tracking-[0,04em] text-black text-shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          Frequently asked questions
        </h1>
        <p className="text-base leading-[150%] text-[rgba(0,0,0,0.7)] max-w-xl">
          Find quick answers to common questions and make the most of Maps
          Explore’s key features, from traffic updates to emergency alerts
        </p>
      </div>
      <FaqAccordion />
    </div>
  );
};

export default Faq;
