// import SmoothScroll from "@/components/layout/SmoothScroll";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    // <SmoothScroll>
    <div className="font-inter">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
    // </SmoothScroll>
  );
};

export default PublicLayout;
