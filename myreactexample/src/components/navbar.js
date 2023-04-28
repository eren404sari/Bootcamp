import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Button, Navbar, Nav} from "react-bootstrap";
import profileimg from "../assets/userprofile.jpg";
import logo from "../assets/snake.png";

const NavBar = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    return (
        <Navbar expand="lg">
            <Container>

                <div>
                    <Link to="/login">
                        <button class="button-nav">
                            Log in
                        </button>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/signup">
                        <button class="button-nav">
                            Sign Up
                        </button>
                    </Link>
                </div>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/*add drop down menu with profile and option to log out as more pages are added to nav bar*/}
                </Navbar.Collapse>

                <div class="fa fa-align-right" aria-hidden="true">
                    <navbar-profile-image
                        className="me-auto"
                        onClick={() => navigate("/profile")}
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            src={profileimg}
                            alt= "profile"
                            style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
                        />
                    </navbar-profile-image>

                    <Nav.Link className="me-3">Welcome, {email}!</Nav.Link>
                </div>

                <Navbar.Brand
                    className="me-auto"
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                >
                    <img 
                        src={logo} 
                        alt="logo"
                        width={30}
                        height={30} 
                    />
                </Navbar.Brand>

               
            </Container>
        </Navbar>
    );
};

export default NavBar;