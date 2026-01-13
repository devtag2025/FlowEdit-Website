import { SquarePlay } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { FaXTwitter, FaLinkedin, FaFacebook, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import MobileFooter from "./MobileFooter";
import Logo from "../Logo";
import { FooterNavigationColumn, LegalPage, SocialLink, NavigationItem } from "@/types/siteSettings";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";
import { getLinkProps } from "@/lib/linkHelper";

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

// Helper function to convert footerColumns to MobileFooter format
const convertToMobileFooterFormat = (footerColumns: FooterNavigationColumn[]) => {
  return footerColumns.map((column) => ({
    title: column.title,
    links: column.items.map((item: NavigationItem) => {
      const linkProps = getLinkProps(item);
      return {
        label: item.title,
        to: linkProps.href,
      };
    }),
  }));
};

const Footer: FC<{
  footerColumns: FooterNavigationColumn[];
  footerLogo: (SanityImageSource & { alt?: string }) | null;
  socialLinks: SocialLink[];
  legalPages: LegalPage[];
}> = ({ footerColumns, footerLogo, socialLinks, legalPages }) => {
  return (
    <div className="w-full relative z-20 md:mt-0 lg:pb-20">
      <div className="mx-auto w-full px-2.5 md:px-0 max-w-[1216px]">
        <footer className=" w-full py-0 hidden md:block px-4 xl:px-0">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                {footerLogo ? (
                  <Link href="/" className="mb-4">
                    <Image
                      src={urlFor(footerLogo).url()}
                      alt={footerLogo.alt || "Logo"}
                      width={150}
                      height={50}
                      className="h-[24px] w-auto"
                    />
                  </Link>
                ) : (
                  <Logo className="text-xl font-semibold mb-4" />
                )}

                {socialLinks && socialLinks.length > 0 && (
                  <div className="flex gap-4 mb-6">
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

                <p className="hidden lg:block text-sm text-black/70">
                  © {new Date().getFullYear()}.{" "}
                  {legalPages.length > 0 && (
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
                  )}
                </p>
              </div>

              {footerColumns?.map((column) => (
                <div
                  key={column._key}
                  className="hidden md:flex flex-col items-center sm:items-start"
                >
                  <h3 className="text-sm font-bold text-black mb-6">
                    {column.title}
                  </h3>

                  <ul className="space-y-3 w-full">
                    {column.items.map((item) => {
                      const linkProps = getLinkProps(item);
                      return (
                        <li key={item._key} className="w-full">
                          <Link
                            {...linkProps}
                            className="relative text-black/90 text-sm font-medium px-3 py-1.5 block w-2/3 hover:border-l-2 hover:border-l-[#2670e9] border-transparent border-l-2 before:absolute before:top-0 before:left-0 before:h-full before:w-[3px] before:bg-[#2670e9] before:blur-[10px] before:opacity-0 before:transition-all before:duration-300 before:ease-out hover:before:opacity-100 after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(38,112,233,0.3)_0%,rgba(38,112,233,0.15)_60%,rgba(38,112,233,0)_100%)] after:opacity-0 after:transition-all after:duration-500 after:ease-out hover:after:opacity-100 cursor-pointer"
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>

        <MobileFooter 
          footerMenu={convertToMobileFooterFormat(footerColumns || [])}
          footerLogo={footerLogo}
          socialLinks={socialLinks}
          legalPages={legalPages}
        />
      </div>
    </div>
  );
};

export default Footer;
