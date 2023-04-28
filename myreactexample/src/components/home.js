import React, { useState } from "react";
import {Button, Container} from "react-bootstrap";
import { useNavigate, Link} from "react-router-dom";
import NavBar from "./navbar";
import logo from "../assets/snake.png";


const Home = () => {
    //const [email, setEmail] = useState("");
    //const navigate = useNavigate();




    return (
        <box>
        <Container>
            <NavBar />
            <div>
                <h2>Welcome!</h2>
                <p>
                    This is the homepage
                </p>
            </div>
        </Container>
            <Container>
                <div className="d-flex flex-column ms-5">
                    <div className="text-center">
                        <br></br>
                        <img src={logo} width={100} height={100} alt="..."/>
                        <br></br>
                    </div>
                </div>
            </Container>
        </box>
    );

    
};
export default Home;
