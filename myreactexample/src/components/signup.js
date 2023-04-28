import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button} from "react-bootstrap";
import { signupApi } from "../Utils/ApiUtil.js";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./navbar";
import Spinner from './spinner.js';

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
        };
        try {
            const response = await axios.post(
                "http://localhost:8077/api/v1/user/signup",
                newUser,
                {
                    "name": firstName,
                    "lastName": lastName,
                    "email": email,
                    "password": password
                }
            );
            console.log(response.data);
            navigate("/login");

        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    var buttonContent = "Go!"
    if (loading) {
        buttonContent = <div className="list-msg"><Spinner /></div>;
    }

    return (
        <box>
        <Container>
                <NavBar />
                <h2>Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                            id="firstName"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control"
                            id="lastName"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    </div>
                    <div>
                        <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    </div>
                    <br></br>
                    <button class="button-submit" role="button" type="submit">
                        {buttonContent}
                    </button>
                </Form>
        </Container>
        </box>
    );
};

export default Signup;