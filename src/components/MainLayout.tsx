import { ReactNode } from "react";
import Search from "./Search";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Search />
      {children}
    </div>
  );
};

export default MainLayout;
