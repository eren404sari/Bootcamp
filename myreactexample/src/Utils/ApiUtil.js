import axios from "axios";


const requestData = (options) => {
    const headers = new Headers();
    if (options.setContentType !== false) {
        headers.append("Content-Type", "application/json");
    }

    if (localStorage.getItem("accessToken")) {
        headers.append("Authorization", `Bearer ${localStorage.getItem("accessToken")}`);
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    console.log("Stringifyuing the Options - in Request Methood", options)

    return fetch(options.url, options).then((response) =>
        response.json().then((json) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json
        }))
}

/*
export const fetchData = async (token) => {
    if (token) {
        try {
            const response = await axios.post(
                `http://localhost:8077/api/v1/user/apiprofile`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }
};
*/

export function loginApi(loginReq) {
    const options = {
        method: 'POST',
        url: "http://localhost:8077/api/v1/user/authenticate",// 'http://localhost:8077/api/v1/user/authenticate',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(loginReq) //{email: 'dheeraj.singh@snva.com', password: '123456'}
    };
    return axios.request(options)
}

/*
export const signupApi = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:8077/api/v1/user/signup`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Error registering:", error);
    }
};
*/

export function profile() {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    if (localStorage.getItem('accessToken')) {
        headers.append('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)
    } else {

    }


    const options = {
        method: 'POST',
        url: "http://localhost:8077/api/v1/user/apiprofile",// 'http://localhost:8077/api/v1/user/authenticate',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        },
        data: {} //{email: 'dheeraj.singh@snva.com', password: '123456'}
    };

    console.log("Headers ", JSON.stringify(headers))
    console.log("Options ", JSON.stringify(options))

    return axios.request(options)
}