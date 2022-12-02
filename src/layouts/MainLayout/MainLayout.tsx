import Navbar from "../../components/Navbar/Navbar";
import { IMainLayoutProps } from "./MainLayout.types";

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
