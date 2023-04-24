import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = {
            email,
            password,
        };
        try {
            const response = await axios.post(
                "http://localhost:8077/api/user",
                newUser,
                {
                    headers: {
                        Authorization: "Bearer",
                    },
                }
            );
            const token = response.data.token;
            console.log("Token:", token);
            alert("Signed up successfully.");
        } catch (error) {
            alert("Error signing up.");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default Signup;