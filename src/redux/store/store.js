import {configureStore} from "@reduxjs/toolkit";
import characterReducer from "../slices/character.slice";

export const store = configureStore({
    characterReducer
});