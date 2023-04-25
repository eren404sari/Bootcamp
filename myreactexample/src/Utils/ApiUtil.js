import axios from "axios";


export const loginApi = async (email, password) => {
    try {
        const response = await axios.post(
            `http://localhost:8077/api/v1/user/authenticate`,
            {
                email,
                password,
                headers: {
                    //Authorization: `Bearer -----`,
                },
            }
            
        );
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
    }
};

export const signupApi = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:8077/api/v1/user/signup`, 
        {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Error signing up:", error);
    }
};