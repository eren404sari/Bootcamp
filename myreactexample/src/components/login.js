import { useState } from "react";
import axios from "axios";
import { Container, Form, Button} from "react-bootstrap";
import { loginApi } from "../Utils/ApiUtil.js";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./navbar";
import Spinner from './spinner.js';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    //login handled in ApiUtils
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {

            const response = await loginApi({
                email: email,
                password: password,
            })
            response.then(function (response) {
                console.log(response.data);
                localStorage.setItem("accessToken", response.data.response);
                navigate("/home");
            }).catch(function (error) {
                console.error(error);
            });

        } catch (error) {
            console.error(error);
            alert("Error logging in");
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
                <div>
                <h2>Login</h2>
                </div>
                <Form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            placeholder="abc@123.com"
                            className="form-control"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            placeholder="123456"
                            className="form-control"
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

export default Login;