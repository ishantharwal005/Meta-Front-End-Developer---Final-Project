import littlelemonlogo from "./littlelemonlogo.jpg"
import "./Header.css"
import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="headerstyle">
            <img src={littlelemonlogo} height = "200px" width = "250px"></img>
            <nav>
                <ul>
                    <li><Link to ="/" style={{textDecoration: 'none'}}>Home</Link></li>
                    <li>About</li>
                    <li><Link to= "/reservation" style={{textDecoration: 'none'}}>Reservation</Link></li>
                    <li>Order Online</li>

                </ul>
            </nav>
        </div>
    )
}

export default Header;