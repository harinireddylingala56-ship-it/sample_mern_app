// function Header() {
//     return (
//         <div>
//             <nav class="navbar bg-body-tertiary">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="#">Navbar</a>
//                 </div>
//             </nav>

//             <nav class="navbar bg-body-tertiary">
//                 <div class="container-fluid">
//                     <span class="navbar-brand mb-0 h1">Navbar</span>
//                 </div>
//             </nav>

//         </div>
//     )

// }
import { Link } from "react-router-dom";
import './Header.css'
function Header() {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to="/adminlogin">Admin Login</Link>

        </div>
    )
}
export default Header;