import { NavLink } from "react-router-dom";

const NavPage = () => {
  return (
    <div>
      <ul style={{ listStyle: "none", display: "flex" }}>
        <img src="/logo.png" />
        <li style={{ padding: "10px" }}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li style={{ padding: "10px" }}>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li style={{ padding: "10px" }}>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li style={{ padding: "10px" }}>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li style={{ padding: "10px" }}>
          <NavLink to="/worldwise">World Wise</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavPage;
