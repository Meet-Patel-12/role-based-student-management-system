import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { injectStore } from "./storeAccessor";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

// 👇 inject store AFTER creation
injectStore(store);

export default store;
