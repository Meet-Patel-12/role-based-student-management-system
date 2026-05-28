import api from "../../api/axios";

/* ===================== AUTH APIs ===================== */

// 🔐 Login
export const loginRequest = async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    return response.data;
};

// 🧑‍🎓 Register (Student only)
export const registerRequest = async (formData) => {
    const response = await api.post("/auth/register", formData);
    return response.data;
};

// 🚪 Logout (optional – backend safe)
export const logoutRequest = async () => {
    const response = await api.post("/auth/logout");
    return response.data;
};
