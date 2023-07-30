import "./Main.css"
import about from "./about.jpg"
import chicken from "./chicken.jpg"
import prawns from "./prawns.jpg"
import paneer from "./paneer.jpg"
import React from "react";

import Card from 'react-bootstrap/Card'

function Main(){
    return(
        <>
        <div className="mainstyle">
            <h2 className="resname">Little Lemon<h4>Pune</h4><h5>We are a family owned <br/>Indian restaurant, focused on <br/>traditional recipes served <br/>with a modern twist</h5></h2>
            
            
            
            <div className="about">
                <img src={about} width="400px" height = "400px" style={{borderRadius: '30px', border: "5px solid lemonchiffon"}}></img>
            </div>

            

        </div>
        
        <div className="cardstyle">
        
            <Card className="mycard">
                    <Card.Body>
                        <Card.Img src={chicken} width={'350px'} height={'350px'}></Card.Img>
                        <Card.Title>Butter Chicken </Card.Title>
                            <Card.Text>
                            Butter chicken made from chicken with a <br/>spiced tomato and butter sauce.<br/> Its sauce is known for its rich texture.  
                            </Card.Text>
                        
                    </Card.Body>
            </Card>


            <Card className="mycard">
                    <Card.Body>
                        <Card.Img src={prawns} width={'350px'} height={'350px'}></Card.Img>
                        <Card.Title>Sweet & Sour Shrimp</Card.Title>
                            <Card.Text>
                            Sweet and Sour Shrimp is made with <br/>golden shrimp stir-fried with bell peppers, <br/>zucchini and then tossed in a tangy honey sauce. 
                            </Card.Text>
                        
                    </Card.Body>
            </Card>


            <Card className="mycard">
                    <Card.Body>
                        <Card.Img src={paneer} width={'350px'} height={'350px'}></Card.Img>
                        <Card.Title>Kadai Paneer</Card.Title>
                            <Card.Text>
                                Kadai Paneer is made with paneer, <br/>onions, and bell peppers cooked in a <br/>spicy onion tomato gravy. 
                            </Card.Text>
                        
                    </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default Main;