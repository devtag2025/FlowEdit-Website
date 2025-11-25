import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full px-6 lg:px-24 xl:px-24 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
