import Banner from "@/components/modules/home-page/Banner";
import DualShowcase from "@/components/modules/home-page/DualShowcase";
import Faq from "@/components/modules/home-page/Faq";
import LovedByCreatorsSection from "@/components/modules/home-page/LovedByCreatorsSection";
import WorkflowSection from "@/components/modules/home-page/WorkflowSection";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative lg:pb-20">
      <Navbar />
      <Image
        src="/bg.jpg"
        alt="background"
        fill
        className="object-cover object-top -z-10 sm:block hidden"
      />
      <Image
        src="/bg-mobile.png"
        alt="background"
        fill
        className="object-cover object-top -z-10 block sm:hidden"
      />
      <Banner />
      <WorkflowSection />
      <DualShowcase />
      <LovedByCreatorsSection />
      <Faq />
      <Footer />
    </div>
  );
}
