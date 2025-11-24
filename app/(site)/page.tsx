import Banner from "@/components/modules/home-page/Banner";
import FeatureShowcase from "@/components/modules/home-page/FeatureShowcase";
import WorkflowSection from "@/components/modules/home-page/WorkflowSection";

export default function HomePage() {
  return (
    <div className="">
      <div className="pt-44">
        <Banner />
        <FeatureShowcase />
        <WorkflowSection />
      </div>
    </div>
  );
}
