import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice'
import cartReducer from "./CartSlice"

export const MainStore = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    }
})