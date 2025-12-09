import Head from "next/head";
import Banner from "./components/Banner";
import Faq from "./components/Faq";
import LovedByCreatorsSection from "./components/LovedByCreatorsSection";
import WorkflowSection from "./components/WorkflowSection";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function HomePage() {
  return (
    <div className="w-full relative lg:pb-20">
      <Head>
        <link rel="preload" as="image" href="/homepage/workflowbg.png" />
        <link rel="preload" as="image" href="/homepage/creatorbg.svg" />
        <link rel="preload" as="image" href="/homepage/faqbg.svg" />
        <link rel="preload" as="image" href="/images/home-page/laptop.png" />
        <link rel="preload" as="image" href="/banner/bannertop.svg" />
        <link rel="preload" as="image" href="/banner/bannerbottom.svg" />
      </Head>
      <Navbar />
      <Banner />
      <WorkflowSection />
      <LovedByCreatorsSection />
      <Faq />
      <Footer />
    </div>
  );
}
