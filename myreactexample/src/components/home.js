import React, { useState } from "react";
import {Button, Container} from "react-bootstrap";
import { useNavigate, Link} from "react-router-dom";
import NavBar from "./navbar";


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
        </box>
    );

    
};
export default Home;
