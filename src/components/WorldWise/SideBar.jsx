import { Outlet } from "react-router-dom";
import NavWorldWise from "./NavWorldWise";

const SideBar = () => {
  return (
    <div>
      <h3>Side Bar</h3>
      <NavWorldWise />
      <Outlet />
    </div>
  );
};

export default SideBar;
