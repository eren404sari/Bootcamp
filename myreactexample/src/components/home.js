import React, { useState } from "react";
import {Button, Container, Navbar} from "react-bootstrap";
import { useNavigate, Link} from "react-router-dom";


const Home = () => {
    //const [email, setEmail] = useState("");
    //const navigate = useNavigate();


    return (
        <Container>
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
        </Container>
    );
};
export default Home;
