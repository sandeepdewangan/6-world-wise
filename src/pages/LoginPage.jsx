import { NavLink } from "react-router-dom";
import NavPage from "../components/NavPage";

const LoginPage = () => {
    return (
        <div>
            <NavPage />
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter username" /> <br/><br/>
            <input type="text" placeholder="Enter password" /> <br/><br/>
            <NavLink to='/home'>Login</NavLink>
        </div>
    );
};

export default LoginPage;