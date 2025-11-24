import Link from "next/link";
import SiteButton from "../SiteButton";

interface navLinkProps {
  navItems: { label: string; to: string }[];
}
const NavItems = ({ navItems }: navLinkProps) => {
  return (
    <div>
      <ul className="capitalize font-medium text-base leading-[150%] flex items-center gap-[2.938rem]">
        {navItems?.map((link, i) => (
          <li key={i}>
            <Link href={link.to}>{link.label}</Link>
          </li>
        ))}

        <SiteButton>Start for Free</SiteButton>
      </ul>
    </div>
  );
};

export default NavItems;
