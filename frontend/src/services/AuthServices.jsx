import axios from "axios";
import { authAxios } from "../config";

export const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

// const token = localStorage.getItem('token');
// console.log("SERVICES: ", token);

// const authAxios = axios.create({
//     baseURL: BACKEND_URL,
//     headers: {
//         Authorization: `Bearer ${token}`
//     }
// })

// ----------------- VALIDATE EMAIL -----------------
export const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

// ----------------- REGISTER USER -----------------
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/users/register`, userData);
        if (response.status === 201) {
            console.log("Successfully registered");
            return response.data;
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.error(message);
    }
}

// ----------------- LOGIN USER -----------------
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/users/login`, userData);
        if (response.statusText === 'OK') {
            console.log("Successfully loggedin");
            return response.data;
        }

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.error(message);
    }
}

// ----------------- HOME -----------------
export const home = async () => {
    try {
        const response = await authAxios.get(`/api/users/home`);
        // const response = await axios.get(`${BACKEND_URL}/api/users/home`, { headers });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.error(message);
    }
}