import PriceBanner from "@/components/modules/pricing-page/PriceBanner";
import PriceCarosel from "@/components/modules/pricing-page/PriceCarosel/PriceCarosel";

const PricingPage = () => {
  return (
    <div className="relative pt-8">
      <PriceBanner />
      <PriceCarosel />
    </div>
  );
};

export default PricingPage;
