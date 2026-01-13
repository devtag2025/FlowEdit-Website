import Image from "next/image";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoCreditCard } from "react-icons/go";
import SiteButton from "@/components/shared/SiteButton";
import DiamondIcon from "@/components/shared/DiamondCheckIcon";
import { Button } from "@/types/siteSettings";

export type FeatureType = "check" | "minus";

interface Feature {
  _key?: string;
  text: string;
  type: FeatureType;
}

interface PriceCardProps {
  title: string;
  price: number;
  priceLabel?: string;
  features: Feature[];
  glow?: boolean;
  cta?: Button;
}

const PriceCard = ({
  title,
  price,
  priceLabel = "Per video",
  features,
  glow = false,
  cta,
}: PriceCardProps) => {
  return (
    <div className="relative py-6 lg:py-12 px-4 lg:px-12 shadow-lg border border-white/25 rounded-[10px] bg-white/50 overflow-hidden flex flex-col items-center gap-8">
      {glow && (
        <div className="absolute inset-0 pointer-events-none -top-10 z-10 opacity-40">
          <Image
            src="/images/price-page/card-glow.png"
            alt="card glow bg"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-col items-center relative z-20">
        <h1 className="font-medium text-sm text-black/70">{title}</h1>

        <div className="flex items-center gap-1">
          <BsCurrencyDollar className="text-3xl text-black/70" />
          <h1 className="font-semibold text-6xl -tracking-[0.04em] text-black">
            {price}
          </h1>
        </div>

        <h1 className="font-medium text-sm text-black/70">{priceLabel}</h1>
      </div>

      <div className="h-px w-[95%] bg-black/15" />

      <ul className="flex flex-col gap-6 relative z-20">
        {features.map((f, i) => (
          <li key={f._key || i} className="flex items-center gap-4">
            <DiamondIcon type={f.type} />
            <p className="text-base text-black/70 leading-[154%]">{f.text}</p>
          </li>
        ))}
      </ul>

      <div className="h-px w-[95%] bg-black/15" />

      {cta && (
        <div className="w-fit shadow-xl relative z-20 rounded-lg">
          <SiteButton button={cta} className="bg-white hover:bg-white">
            <div className="flex items-center gap-2">
              <span>{cta.text || "Get Started"}</span>
              <GoCreditCard />
            </div>
          </SiteButton>
        </div>
      )}
    </div>
  );
};

export default PriceCard;
