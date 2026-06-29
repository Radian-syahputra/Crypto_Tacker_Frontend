import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
export default MainLayout;
