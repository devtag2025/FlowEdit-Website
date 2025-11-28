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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "home", to: "/" },
    { label: "pricing", to: "/pricing" },
    { label: "portfolio", to: "/portfolio" },
  ];

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
      className={`sticky top-0 left-0 z-50 w-full px-6 md:px-20 py-6 flex items-center justify-between text-white transition-all duration-300 
      ${scrolled ? "bg-[#6283ea]/50 backdrop-blur-lg" : "bg-transparent"}`}
    >
      <Link
        href="/"
        className={`font-inter font-medium text-xl leading-[150%]`}
      >
        <h1>Flow Edit</h1>
      </Link>

      <div className="hidden md:flex">
        <NavItems navItems={navItems} />
      </div>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="w-7 h-7" />
          </SheetTrigger>

          <SheetContent
            forceMount
            side="top"
            className="p-0 w-full h-screen max-w-[100vw] overflow-hidden border-none bg-[#6283ea] [&>button]:hidden"
          >
            <Image
              src="/images/background/mobile-bg.png"
              alt="mobile-menu-bg"
              fill
              className="object-cover"
            />

            <div>
              <SheetTitle>
                <Logo className="absolute left-6 top-8 z-20 text-white" />
              </SheetTitle>

              <div className="pointer-events-auto">
                <SheetClose asChild>
                  <button className="absolute right-6 top-8 z-999 text-white">
                    <X className="w-7 h-7" />
                  </button>
                </SheetClose>
              </div>
            </div>

            <MobileMenu navItems={navItems} />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
