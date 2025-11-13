import axios from "axios";
import  dotenv from "dotenv";
dotenv.config();
console.log("hoi",process.env.REACT_APP_API_URI);
const API = axios.create({ baseURL: process.env.REACT_APP_API_URI });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("authData")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("authData")).auth_token
        }`;
    }

    return req;
});

export default API;
