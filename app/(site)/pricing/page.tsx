import PriceBanner from "@/components/modules/pricing-page/PriceBanner";
import PriceCarosel from "@/components/modules/pricing-page/PriceCarosel";

const PricingPage = () => {
  return (
    <div className="pt-8 lg:pt-24">
      <PriceBanner />
      <PriceCarosel />
    </div>
  );
};

export default PricingPage;
