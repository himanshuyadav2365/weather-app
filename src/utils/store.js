import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";


const app=configureStore({
    reducer:{
        weather:weatherSlice
    }
})

export default app