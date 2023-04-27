import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Navbar} from "react-bootstrap";
import { signupApi } from "../Utils/ApiUtil.js";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./navbar";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signupApi(email, password);
            navigate("/login");
        } catch (error) {
            alert("Error signing up");
        }
    };

    return (
        <Container>
            <NavBar />
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <div>
                    <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                </div>
                <div>
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                </div>
                <Button variant="primary" type="submit" class="btn btn-primary btn-sm">
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
};

export default Signup;