import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Button, Navbar, Nav} from "react-bootstrap";


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
                <div>
                    <Link to="/profile">
                        <img
                            src={'../img/userprofile.jpg'}
                            alt="profile"
                            width={30}
                            height={30}
                            roundedCircle
                            className="me-3"
                        />
                    </Link>
                </div>
                <Nav.Link className="me-3">Welcome, {email}!</Nav.Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/*add drop down menu with profile and option to log out as more pages are added to nav bar*/}
                </Navbar.Collapse>

                <Navbar.Brand
                    className="me-auto"
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                >
                    🐍
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavBar;