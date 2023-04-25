import { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Navbar} from "react-bootstrap";
import { loginApi } from "../Utils/ApiUtil.js";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    //login handled in ApiUtils
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const login_attempt = await loginApi(email, password);

            if (login_attempt.status === "success") {
                const token = login_attempt.response;
                localStorage.setItem("authToken", token);
                navigate("/home");
            } else {
                alert(login_attempt.response);
            }
        } catch (error) {
            alert("Error logging in.");
        }
    };

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
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <Button variant="primary" type="submit" class="btn btn-primary btn-sm">
                    Log In
                </Button>
            </Form>
        </Container>
    );
};

export default Login;