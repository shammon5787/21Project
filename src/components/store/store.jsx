import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartProduct'

const store = configureStore({
    reducer:{
        MyCarts: cartReducer
       }
})

export default store