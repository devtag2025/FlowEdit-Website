import { IFooter } from "@/types/footer";
import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { LegalPage, SocialLink } from "@/types/siteSettings";
import { urlFor } from "@/sanity/lib/image";
import { SquarePlay } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaFacebook, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa6";

interface FooterProps {
  footerMenu: IFooter[];
  footerLogo?: (SanityImageSource & { alt?: string }) | null;
  socialLinks?: SocialLink[];
  legalPages?: LegalPage[];
}

// Helper function to get social media icon component
const getSocialIcon = (platform: SocialLink['platform']) => {
  switch (platform) {
    case 'twitter':
      return <FaXTwitter className="text-lg" />;
    case 'youtube':
      return <SquarePlay />;
    case 'linkedin':
      return <FaLinkedin className="text-lg" />;
    case 'facebook':
      return <FaFacebook className="text-lg" />;
    case 'instagram':
      return <FaInstagram className="text-lg" />;
    case 'github':
      return <FaGithub className="text-lg" />;
    default:
      return null;
  }
};

const MobileFooter = ({ footerMenu, footerLogo, socialLinks, legalPages }: FooterProps) => {
  return (
    <footer className="md:hidden flex flex-col gap-12 mt-14">
      {footerLogo ? (
        <Link href="/" className="flex justify-center mb-4">
          <Image
            src={urlFor(footerLogo).url()}
            alt={footerLogo.alt || "Logo"}
            width={150}
            height={50}
            className="h-[24px] w-auto"
          />
        </Link>
      ) : (
        <Logo className="text-lg font-bold text-center" />
      )}

      {socialLinks && socialLinks.length > 0 && (
        <div className="flex gap-4 justify-center mb-4">
          {socialLinks.map((social) => (
            <Link
              key={social._key}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors"
            >
              {getSocialIcon(social.platform)}
            </Link>
          ))}
        </div>
      )}

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
                    className="font-medium text-[13px] leading-[154%] text-black relative text-sm px-3 py-1.5 block w-2/3 hover:border-l-2 hover:border-l-[#2670e9] border-transparent border-l-2 before:absolute before:top-0 before:left-0 before:h-full before:w-[3px] before:bg-[#2670e9] before:blur-[10px] before:opacity-0 before:transition-all before:duration-300 before:ease-out hover:before:opacity-100 after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(38,112,233,0.3)_0%,rgba(38,112,233,0.15)_60%,rgba(38,112,233,0)_100%)] after:opacity-0 after:transition-all after:duration-500 after:ease-out hover:after:opacity-100 whitespace-nowrap cursor-pointer"
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
          © {new Date().getFullYear()}.{" "}
          {legalPages && legalPages.length > 0 ? (
            <>
              {legalPages.map((page, idx) => {
                const url = page.page?.slug?.current 
                  ? `/${page.page.slug.current}` 
                  : '#';
                return (
                  <span key={page._key}>
                    <Link href={url} className="hover:underline cursor-pointer">
                      {page.title.toUpperCase()}
                    </Link>
                    {idx < legalPages.length - 1 && '. '}
                  </span>
                );
              })}
            </>
          ) : (
            <>
              <Link href="#" className="hover:underline cursor-pointer">
                PRIVACY
              </Link>
              .{" "}
              <Link href="#" className="hover:underline cursor-pointer">
                TERMS
              </Link>
            </>
          )}
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;
