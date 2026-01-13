import { ReactNode } from "react";
import FluidContainer from "@/components/layout/FluidContainer";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { getSiteSettings } from "@/sanity/lib/api";

const PublicLayout = async ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const siteSettings = await getSiteSettings();

  return (
    <div className="font-inter">
      <FluidContainer>
        <Navbar
          navItems={siteSettings?.headerNavigation || []}
          ctaButton={siteSettings?.headerCTA || null}
          logo={siteSettings?.logo || null}
          mobileMenuBackground={siteSettings?.mobileMenuBackground || null}
        />
        <main>{children}</main>
        <Footer
          footerColumns={siteSettings?.footerColumns || []}
          footerLogo={siteSettings?.footerLogo || null}
          socialLinks={siteSettings?.socialLinks || []}
          legalPages={siteSettings?.legalPages || []}
        />
      </FluidContainer>
    </div>
  );
};

export default PublicLayout;
