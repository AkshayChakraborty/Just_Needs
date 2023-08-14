import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../Slices/AuthSlice";
import { HomeApi } from "../Slices/HomeDataSlice";


export const Store = configureStore({
    reducer: {
        Auth: AuthSlice.reducer,
        Home: HomeApi.reducer,
       
    }
})