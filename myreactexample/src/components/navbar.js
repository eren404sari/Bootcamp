import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button, Navbar, Nav} from "react-bootstrap";


const NavBar = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


  

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleLogout = () => {

    };

    const handleSignupClick = () => {
        navigate("/signup");
    };

    return (
        <Navbar bg="secondary" expand="lg">
            <Container>

                <div>
                    <Link to="/login">
                        <Button>log in</Button>
                    </Link>
                </div>

                <div>
                    <Link to="/signup">
                        <Button>sign up</Button>
                    </Link>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/*add drop down menu with profile and option to log out*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;