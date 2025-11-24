import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto w-full px-6 lg:px-24 xl:px-24">{children}</div>
  );
};

export default Container;
