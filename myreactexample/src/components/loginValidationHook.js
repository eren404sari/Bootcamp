import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../Utils/ApiUtil.js";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//npm install react-hook-form
//npm install--save react - toastify


const LoginHook = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  

   
};
export default LoginHook;