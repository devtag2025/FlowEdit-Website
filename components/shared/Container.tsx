import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-12 max-w-[640px] sm:max-w-3xl md:max-w-5xl lg:max-w-[1216px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
