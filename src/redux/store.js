import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./slices/car.slices";

const store = configureStore({
    reducer: {
        carReducer
    }
});

export default store;