import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../slices/user.slice/user.slice";
import postReducer from "../slices/post.slice/post.slice";
import commentReducer from "../slices/comment.slice/comment.slice";
import carReducer from "../slices/car.slice/car.slice";
import todoReducer from "../slices/todo.slice/todo.slice";

export const store = configureStore({
    reducer: {
        userReducer,
        postReducer,
        commentReducer,
        carReducer,
        todoReducer
    }
});