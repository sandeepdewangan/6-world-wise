import { NavLink } from "react-router-dom";

const NavPage = () => {
    return (
        <div>
            <ul>
                <img src="logo.png" />
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
                <li><NavLink to="/product">Product</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/worldwise">World Wise</NavLink></li>
            </ul>
        </div>
    );
};

export default NavPage;