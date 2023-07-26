import Nav from './Nav';
import littlelemonlogo from './littlelemonlogo.jpg';
import {HStack} from "@chakra-ui/react";
import "./Header.css"
function Header(){
    return(
        <>
        <HStack className="header-container" spacing = "200px">
            <img src = {littlelemonlogo} alt = "logo" height = "200px" width = "250px"/>
            <Nav/>
        </HStack>
        </>
    )
}

export default Header;  