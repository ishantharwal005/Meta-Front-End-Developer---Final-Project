import "./Footer.css"
import littlelemonlogo from "./littlelemonlogo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
function Footer(){
    return(
        <>
        <div className="footerstyle">
            <img src={littlelemonlogo} height = "200px" width = "250px"></img>

            <div className="contact" style={{marginLeft: '300px'}}>
                <h3>Contact:<br/></h3>
                <h3>Address: 123, abc street, Pune<br/></h3>
                <h3>Phone: 123456789<br/></h3>
                <h3>Email: littlelemon@abcd.com</h3>    
            </div>

            <div style={{marginLeft: '400px'}}>
            <h3 >Social Media</h3>
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{marginBottom: '7px'}}/>
            <br></br>
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{marginBottom: '7px'}}/>
            <br></br>
            <FontAwesomeIcon icon={faTwitter} size="2x" style={{marginBottom: '7px'}}/>
            </div>
        </div>
        
    </>
    )
}

export default Footer;