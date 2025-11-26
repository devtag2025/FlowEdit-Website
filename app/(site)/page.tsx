import Banner from "@/components/modules/home-page/Banner";
import DualShowcase from "@/components/modules/home-page/DualShowcase";
import Faq from "@/components/modules/home-page/Faq";
import FeatureShowcase from "@/components/modules/home-page/FeatureShowcase";
import GetStarted from "@/components/modules/home-page/GetStarted";
import LovedByCreatorsSection from "@/components/modules/home-page/LovedByCreatorsSection";
import WorkflowSection from "@/components/modules/home-page/WorkflowSection";

export default function HomePage() {
  return (
    <div className="">
      <div className="pt-8 lg:pt-44">
        <Banner />
        <FeatureShowcase />
        <WorkflowSection />
        <DualShowcase />
        <LovedByCreatorsSection />
        <Faq />
        <GetStarted />
      </div>
    </div>
  );
}
