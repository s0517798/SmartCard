import axios from "axios";

import LocalStorageService from "../app/localStorageService";

const baseDomain = process.env.MIX_PUSHER_API_DOMAIN || "http://localhost:8081";

const baseUrl = `${baseDomain}/api`;

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = LocalStorageService.getToken();
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

export default instance;
