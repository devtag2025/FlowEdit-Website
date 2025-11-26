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

const Navbar = () => {
  const navItems = [
    { label: "home", to: "/" },
    { label: "pricing", to: "/pricing" },
    { label: "portfolio", to: "/portfolio" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-6 flex items-center justify-between text-white">
      <Logo />

      {/* Desktop Nav */}
      <div className="hidden md:flex">
        <NavItems navItems={navItems} />
      </div>

      {/* Mobile Nav */}
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
