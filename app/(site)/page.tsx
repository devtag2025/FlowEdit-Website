import Banner from "./components/Banner";
import Faq from "./components/Faq";
import LovedByCreatorsSection from "./components/LovedByCreatorsSection";
import WorkflowSection from "./components/WorkflowSection";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1440px] relative lg:pb-20">
      <Navbar />
      <Banner />
      <WorkflowSection />
      <LovedByCreatorsSection />
      <Faq />
      <Footer />
    </div>
  );
}
