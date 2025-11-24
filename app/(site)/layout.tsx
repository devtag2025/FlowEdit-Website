import Background from "@/components/sections/Background";
import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="relative">
      <Background />
      <div className="absolute top-0 left-0 z-20 h-screen w-full">
        <Navbar />
        <main className="grow max-w-svw min-h-screen font-inter">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PublicLayout;
