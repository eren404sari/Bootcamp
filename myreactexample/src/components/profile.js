import React, { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "./navbar";
import { fetchData } from "../Utils/ApiUtil.js";
import profileimg from "../assets/userprofile.jpg";

//const selectToken = (state) => state.auth.token;
//const navigate = useNavigate();


//TO-DO:
 //unable to change profile picture currently so this is a temp one for all profiles



//const selectToken = (state) => state.auth.token;

    const Profile = () => {
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        //const [email, setEmail] = useState("");
        //const navigate = useNavigate();
                // const {firstName, lastName, email, mobile, profilePictureURL } = props;


                return (
                    <box>
                        <Container>
                            <NavBar />
                            <div className="d-flex flex-column ms-5">
                                <div className="text-center">
                                    <br></br>
                                    <img src={profileimg} style={{ width: 100, height: 100, borderRadius: 20 / 2 }} alt="..." />
                                    <br></br>
                                    <h2 className="mt-1 mb-5 pb-1"> Hello, {firstName} {lastName}</h2>
                                </div>
                            </div>
                        </Container>
                    </box>
                )
    }

export default Profile;