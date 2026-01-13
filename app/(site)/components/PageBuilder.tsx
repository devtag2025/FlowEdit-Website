import BannerBlock from "./blocks/BannerBlock";
import WorkflowSection from "./WorkflowSection";
import LovedByCreatorsSection from "./LovedByCreatorsSection";
import Faq from "./Faq";
import PortfolioBanner from "@/components/sections/PortfolioBanner";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";

interface ContentBlock {
  _key: string;
  _type: string;
  [key: string]: any;
}

interface PageBuilderProps {
  blocks?: ContentBlock[];
}

const PageBuilder = ({ blocks = [] }: PageBuilderProps) => {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  // Generate a unique key for each block
  // Uses _key if available, otherwise falls back to _type + index
  const getBlockKey = (block: ContentBlock, index: number) => {
    if (block._key) {
      return `${block._type}-${block._key}`;
    }
    return `${block._type}-${index}`;
  };

  return (
    <>
      {blocks.map((block, index) => {
        const blockKey = getBlockKey(block, index);
        
        switch (block._type) {
          case "bannerBlock":
            return (
              <BannerBlock
                key={blockKey}
                headerButtonText={block.headerButtonText}
                rating={block.rating}
                title={block.title}
                subtitle={block.subtitle}
                bottomText={block.bottomText}
                secondSectionTitle={block.secondSectionTitle}
                secondSectionSubtitle={block.secondSectionSubtitle}
                secondSectionDescription={block.secondSectionDescription}
                cta={block.cta}
                mainImage={block.mainImage}
                topBannerImage={block.topBannerImage}
                bottomBannerImage={block.bottomBannerImage}
              />
            );
          case "workflowBlock":
            return (
              <WorkflowSection
                key={blockKey}
                title={block.title}
                backgroundImage={block.backgroundImage}
                workflowItems={block.workflowItems}
                showcaseSections={block.showcaseSections}
              />
            );
          case "lovedByCreatorsBlock":
            return (
              <LovedByCreatorsSection
                key={blockKey}
                headerButtonText={block.headerButtonText}
                title={block.title}
                backgroundImage={block.backgroundImage}
                testimonials={block.testimonials}
              />
            );
          case "faqBlock":
            return (
              <Faq
                key={blockKey}
                headerButtonText={block.headerButtonText}
                title={block.title}
                description={block.description}
                faqs={block.faqs}
                getStartedTitle={block.getStartedTitle}
                getStartedCta={block.getStartedCta}
              />
            );
          case "portfolioBannerBlock":
            return (
              <PortfolioBanner
                key={blockKey}
                title={block.title}
                description={block.description}
                cta={block.cta}
                projects={block.projects}
              />
            );
          case "portfolioShowcaseBlock":
            return (
              <PortfolioShowcase
                key={blockKey}
                title={block.title}
                description={block.description}
                image={block.image}
                cta={block.cta}
              />
            );
          // Add more block types here as you create them
          // case "heroBlock":
          //   return <HeroBlock key={blockKey} {...block} />;
          // case "featuresGridV1":
          //   return <FeaturesGridV1 key={blockKey} {...block} />;
          default:
            console.warn(`Unknown block type: ${block._type}`);
            return null;
        }
      })}
    </>
  );
};

export default PageBuilder;
