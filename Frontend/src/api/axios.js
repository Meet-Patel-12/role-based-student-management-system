import axios from "axios";
import { getStore } from "../store/storeAccessor";
import { logout } from "../features/auth/authSlice";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// Request interceptor
api.interceptors.request.use((config) => {
    const store = getStore();
    const token = store?.getState().auth.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response interceptor
api.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response?.status === 401) {
            const store = getStore();
            store?.dispatch(logout());
        }
        return Promise.reject(error);
    }
);

export default api;
