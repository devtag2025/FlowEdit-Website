import { IFooter } from "@/types/footer";
import Logo from "../Logo";
import Link from "next/link";

interface FooterProps {
  footerMenu: IFooter[];
}

const MobileFooter = ({ footerMenu }: FooterProps) => {
  return (
    <footer className="md:hidden flex flex-col gap-12 mt-14">
      <Logo className="text-lg font-bold text-center" />

      <div className="grid grid-cols-2 gap-8">
        {footerMenu?.map((menu, i) => (
          <div key={i} className="space-y-2.5">
            <h1 className="text-xs font-medium leading-[150%] text-[rgba(0,0,0,0.7)]">
              {menu.title}
            </h1>

            <ul className="space-y-[3px]">
              {menu.links?.map((link, j) => (
                <li key={j} className="w-full">
                  <Link
                    href={link.to}
                    className="font-medium text-[13px] leading-[154%] text-black relative text-sm px-3 py-1.5 block w-2/3 hover:border-l-2 hover:border-l-[#2670e9] border-transparent border-l-2 before:absolute before:top-0 before:left-0 before:h-full before:w-[3px] before:bg-[#2670e9] before:blur-[10px] before:opacity-0 before:transition-all before:duration-300 before:ease-out hover:before:opacity-100 after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(38,112,233,0.3)_0%,rgba(38,112,233,0.15)_60%,rgba(38,112,233,0)_100%)] after:opacity-0 after:transition-all after:duration-500 after:ease-out hover:after:opacity-100 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-5 pb-5 flex flex-col items-center">
        <div className="h-px w-72 bg-black/15"></div>

        <p className="text-sm text-black/70">
          © 2025.{" "}
          <Link href="#" className="hover:underline">
            PRIVACY
          </Link>
          .{" "}
          <Link href="#" className="hover:underline">
            TERMS
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;
