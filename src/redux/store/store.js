import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../slices/user.slice/user.slice";
import postReducer from "../slices/post.slice/post.slice";
import commentReducer from "../slices/comments.slice/comment.slice";

export const store = configureStore({
    reducer: {
        userReducer,
        postReducer,
        commentReducer
    }
});