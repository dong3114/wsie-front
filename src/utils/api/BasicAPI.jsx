import axios from "axios";

const WISE_API = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    timeout: 10000,
})

WISE_API.interceptors.request.use((config) => {
    return config;
})