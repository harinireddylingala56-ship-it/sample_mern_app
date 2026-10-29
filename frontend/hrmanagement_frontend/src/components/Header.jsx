
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    let currentuser = JSON.parse(
        localStorage.getItem("currentuser") || "null"
    );

    let location = useLocation();
    let navigate = useNavigate();

    // Logout function
    let handleLogout = () => {
        localStorage.removeItem("currentuser");
        navigate("/login");
    };

    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to="/adminlogin">Admin Login</Link>

            {!currentuser && (
                <div>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            )}

            {currentuser && currentuser.role === "HR" && (
                <div>
                    <Link to="#">View Tasks</Link>
                    <Link to="#">Create Todo</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}

            {currentuser && currentuser.role === "EMPLOYEE" && (
                <div>
                    <Link to="#">View Tasks</Link>
                    <Link to="#">Todo</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}

            {currentuser && currentuser.role === "admin" && (
                <div>
                    <Link to="#">View Employees</Link>
                    <Link to="#">View Tasks</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default Header;