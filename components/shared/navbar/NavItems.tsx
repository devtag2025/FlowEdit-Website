import Link from "next/link";
import SiteButton from "../SiteButton";
import { NavigationItem, Button } from "@/types/siteSettings";
import { getLinkProps } from "@/lib/linkHelper";

interface navLinkProps {
  navItems: NavigationItem[];
  ctaButton: Button | null;
}
const NavItems = ({ navItems, ctaButton }: navLinkProps) => {
  return (
    <div>
      <ul className="capitalize font-medium text-base leading-[150%] flex items-center gap-[2.938rem]">
        {navItems?.map((item) => {
          const linkProps = getLinkProps(item);
          return (
            <li key={item._key}>
              <Link {...linkProps} className="cursor-pointer">
                {item.title}
              </Link>
            </li>
          );
        })}

        {ctaButton && (
          <li>
<Link href="/pricing">
  <SiteButton button={ctaButton} />
</Link>


          </li>
        )}
      </ul>
    </div>
  );
};

export default NavItems;
