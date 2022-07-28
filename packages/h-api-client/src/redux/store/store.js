import { configureStore } from "@reduxjs/toolkit";
import homeMenuReducer from "./../slice/homeMenuSlice"

const store = configureStore({
    reducer: {
        homeMenu: homeMenuReducer,
    }
})

export default store;