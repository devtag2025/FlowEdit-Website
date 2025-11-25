import { SquarePlay } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { FaXTwitter } from "react-icons/fa6";

const footerMenu = [
  {
    title: "SITE MAP",
    links: ["Product", "Pricing", "Changelog", "Sign in"],
  },
  {
    title: "MADE BY US",
    links: ["Courses", "UI Templates", "Icons", "Mockups"],
  },
  {
    title: "TOOLS WE USE",
    links: ["Figma", "Framer", "Spline", "Screen Studio"],
  },
];

// FOLLOW US should ONLY appear on MOBILE
const footerMenuMobile = [
  {
    title: "FOLLOW US",
    links: ["Twitter", "Youtube"],
  },
];

const Footer: FC = () => {
  return (
    <footer className="w-full py-24 bg-transparent mt-40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-xl font-bold mb-4">Flow Edit</h2>

            <div className="flex gap-4 mb-6">
              <div className="h-8 w-8 rounded bg-white/30 backdrop-blur-sm flex items-center justify-center">
                <FaXTwitter className="text-lg" />
              </div>

              <div className="h-8 w-8 rounded bg-white/30 backdrop-blur-sm flex items-center justify-center">
                <SquarePlay />
              </div>
            </div>

            <p className="hidden lg:block text-sm text-black/70">
              © 2023 .{" "}
              <Link href="#" className="hover:underline">
                PRIVACY
              </Link>{" "}
              .{" "}
              <Link href="#" className="hover:underline">
                TERMS
              </Link>
            </p>
          </div>

          {/* Desktop Menu Sections */}
          {footerMenu.map((menu, idx) => (
            <div
              key={idx}
              className="hidden lg:flex flex-col items-center sm:items-start"
            >
              <h3 className="text-sm font-bold text-black mb-6">
                {menu.title}
              </h3>

              <ul className="space-y-3 w-full">
                {menu.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="w-full">
                    <Link
                      href="#"
                      className="
                        relative text-black/90 text-sm font-medium px-3 py-1.5 block w-full
                        hover:border-l-2 hover:border-l-[#2670e9] border-transparent border-l-2
                        before:absolute before:top-0 before:left-0 before:h-full before:w-[3px] before:bg-[#2670e9]
                        before:blur-[10px] before:opacity-0 before:transition-all before:duration-300 before:ease-out
                        hover:before:opacity-100
                        after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(38,112,233,0.3)_0%,rgba(38,112,233,0.15)_60%,rgba(38,112,233,0)_100%)]
                        after:opacity-0 after:transition-all after:duration-500 after:ease-out
                        hover:after:opacity-100
                      "
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* FOLLOW US — ONLY VISIBLE ON MOBILE */}
          <div className="flex flex-col items-center sm:items-start lg:hidden">
            <h3 className="text-sm font-bold text-black mb-6">FOLLOW US</h3>

            <ul className="space-y-3 w-full">
              {footerMenuMobile[0].links.map((link, idx) => (
                <li key={idx} className="w-full">
                  <Link
                    href="#"
                    className="
                      relative text-black/90 text-sm font-medium px-3 py-1.5 block w-full
                      hover:border-l-2 hover:border-l-[#2670e9] border-transparent border-l-2
                      before:absolute before:top-0 before:left-0 before:h-full before:w-[3px] before:bg-[#2670e9]
                      before:blur-[10px] before:opacity-0 before:transition-all before:duration-300 before:ease-out
                      hover:before:opacity-100
                      after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(38,112,233,0.3)_0%,rgba(38,112,233,0.15)_60%,rgba(38,112,233,0)_100%)]
                      after:opacity-0 after:transition-all after:duration-500 after:ease-out
                      hover:after:opacity-100
                    "
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section (MOBILE ONLY) */}
        <div className="lg:hidden text-center mt-16 text-sm text-black/60">
          © 2023 . PRIVACY . TERMS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
