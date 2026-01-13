import Link from "next/link";
import SiteButton from "../SiteButton";
import { SheetClose } from "@/components/ui/sheet";
import { NavigationItem, Button } from "@/types/siteSettings";
import { getLinkProps } from "@/lib/linkHelper";

const MobileMenu = ({
  navItems,
  ctaButton,
}: {
  navItems: NavigationItem[];
  ctaButton: Button | null;
}) => {
  return (
    <div className="relative h-full w-full text-white overflow-hidden">
      <div className="relative z-20 flex flex-col items-center justify-center h-full gap-14 text-lg font-medium tracking-wide">
        {navItems.map((item) => {
          const linkProps = getLinkProps(item);
          return (
            <div key={item._key} className="flex flex-col items-center space-y-14">
              <SheetClose asChild>
                <Link
                  {...linkProps}
                  className="capitalize text-white text-xl font-semibold cursor-pointer"
                >
                  {item.title}
                </Link>
              </SheetClose>

              <div className="h-px w-72 bg-white/40"></div>
            </div>
          );
        })}

        {ctaButton && (
          <SheetClose asChild>
            <SiteButton button={ctaButton} className="px-6 py-3 text-base shadow-lg" />
          </SheetClose>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
