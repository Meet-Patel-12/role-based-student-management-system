import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "./authAPI";

/* ===================== THUNKS ===================== */

// 🔐 Login user
export const loginUser = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            return await loginRequest(credentials);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);

/* ===================== INITIAL STATE ===================== */

const initialState = {
    user: null,
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || null,
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
    error: null,
};

/* ===================== SLICE ===================== */

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.role = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;

            localStorage.removeItem("token");
            localStorage.removeItem("role");
        },

    },
    extraReducers: (builder) => {
        builder
            // LOGIN → PENDING
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // LOGIN → SUCCESS
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.role = action.payload.user?.role;
                state.isAuthenticated = true;

                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("role", action.payload.user?.role);
            })

            // LOGIN → ERROR
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
