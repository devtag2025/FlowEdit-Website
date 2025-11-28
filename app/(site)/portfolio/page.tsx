import Faq from "@/components/modules/home-page/Faq";
import GetStarted from "@/components/modules/home-page/GetStarted";
import LovedByCreatorsSection from "@/components/modules/home-page/LovedByCreatorsSection";
import AllProjects from "@/components/modules/portfolio-page/all-projects/AllProjects";
import PortfolioBanner from "@/components/modules/portfolio-page/PortfolioBanner";
import PortfolioShowcase from "@/components/modules/portfolio-page/PortfolioShowcase";

const PortfolioPage = () => {
  return (
    <div className="pt-0">
      <PortfolioBanner />
      <AllProjects />
      <PortfolioShowcase />
      <div className="pt-52 lg:pt-0">
        <LovedByCreatorsSection />
      </div>
      <Faq />
    </div>
  );
};

export default PortfolioPage;
