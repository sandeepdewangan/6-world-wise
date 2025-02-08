import { NavLink } from "react-router-dom";

const NavWorldWise = () => {
  return (
    <div>
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li style={{ padding: "2px" }}>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li style={{ padding: "2px" }}>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavWorldWise;
