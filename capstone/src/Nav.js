
import { Link } from "@chakra-ui/react";
import "./Nav.css"
function Nav(){
    return(
        <>
        <nav>
            <ul className="nav-container"> {/* Use className instead of style attribute */}
                <li className="nav-item">
                <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link to="/menu">Menu</Link>
                </li>
                <li className="nav-item">
                <Link to="/reservation">Reservation</Link>
                </li>
                <li className="nav-item">
                <Link to="/orderonline">Order Online</Link>
                </li>
                <li className="nav-item">
                <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;