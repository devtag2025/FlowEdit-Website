import Link from "next/link";
import SiteButton from "../SiteButton";

const MobileMenu = ({
  navItems,
}: {
  navItems: { label: string; to: string }[];
}) => {
  return (
    <div className="relative h-full w-full text-white overflow-hidden">
      <div className="relative z-20 flex flex-col items-center justify-center h-full gap-14 text-lg font-medium tracking-wide">
        {navItems.map((link, i) => (
          <div key={i} className="flex flex-col items-center space-y-14">
            <Link
              href={link.to}
              className="capitalize text-white text-xl font-semibold"
            >
              {link.label}
            </Link>

            <div className="h-px w-72 bg-white/40"></div>
          </div>
        ))}

        <SiteButton className="px-6 py-3 text-base shadow-lg">
          Start for Free
        </SiteButton>
      </div>
    </div>
  );
};

export default MobileMenu;
