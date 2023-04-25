
import { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                `http://localhost:8077/api/v1/user/authenticate`,
                {
                    email,
                    password,
                },
                {
                    headers:
                    {
                        Authorization: "Bearer",
                    },
                } 
            );
            const token = response.data.token;
            console.log("Token:", token);
            alert("Logged in successfully.");
        } catch (error) {
            alert("Error logging in.");
        }
    };

return (
    <Container>
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