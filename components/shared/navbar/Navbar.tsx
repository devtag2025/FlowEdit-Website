"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Logo from "../Logo";
import NavItems from "./NavItems";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { NavigationItem, Button } from "@/types/siteSettings";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const Navbar = ({
  navItems,
  ctaButton,
  logo,
  mobileMenuBackground,
}: {
  navItems: NavigationItem[];
  ctaButton: Button | null;
  logo: (SanityImageSource & { alt?: string }) | null;
  mobileMenuBackground: (SanityImageSource & { alt?: string }) | null;
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[9999] mx-auto w-full max-w-[1440px] px-2 py-3 text-white transition-all duration-300 
      ${scrolled ? "bg-[#6283ea]/80 backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-[1216px] flex items-center justify-between">
        {logo && (
          <Link
            href="/"
            className={`font-inter font-medium text-xl leading-[150%] cursor-pointer`}
          >
            <Image
              src={urlFor(logo).url()}
              alt={logo.alt || "Logo"}
              width={150}
              height={50}
              className="h-[24px] w-auto"
            />
          </Link>
        )}

        <div className="hidden md:flex">
          <NavItems navItems={navItems} ctaButton={ctaButton} />
        </div>

        <div className="md:hidden lg:hidden">
          <Sheet>
            <SheetTrigger className="cursor-pointer">
              <Menu className="w-5 h-5" />
            </SheetTrigger>

            <SheetContent
              forceMount
              side="top"
              className="p-0 w-full h-screen max-w-[100vw] overflow-hidden border-none bg-[#6283ea] [&>button]:hidden z-[9999]"
            >
              {mobileMenuBackground ? (
                <Image
                  src={urlFor(mobileMenuBackground).url()}
                  alt={mobileMenuBackground.alt || "mobile-menu-bg"}
                  fill
                  className="object-cover"
                />
              ) : (
                ""
              )}

              <div>
                <SheetTitle>
                  {logo && (
                    <Link
                      href="/"
                      className="cursor-pointer absolute left-6 top-8 z-20"
                    >
                      <Image
                        src={urlFor(logo).url()}
                        alt={logo.alt || "Logo"}
                        width={150}
                        height={50}
                        className="h-[24px] w-auto"
                      />
                    </Link>
                  )}
                </SheetTitle>

                <div className="pointer-events-auto">
                  <SheetClose asChild>
                    <button className="absolute right-6 top-8 z-999 text-white cursor-pointer">
                      <X className="w-7 h-7" />
                    </button>
                  </SheetClose>
                </div>
              </div>

              <MobileMenu navItems={navItems} ctaButton={ctaButton} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
