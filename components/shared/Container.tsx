import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full px-2 md:px-0 max-w-[1216px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
