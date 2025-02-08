import { Outlet } from "react-router-dom";
import NavWorldWise from "./NavWorldWise";

const SideBar = () => {
  return (
    <div>
      <NavWorldWise />
      <Outlet />
    </div>
  );
};

export default SideBar;
