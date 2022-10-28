import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../../../services/comment.service";

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const comments = await commentService.getAll();
            dispatch(setComments({data: comments}))
        } catch (e) {
            console.log(e);
            rejectWithValue(e.message)
        }
    }
)

export const getCommentById = createAsyncThunk(
    'commentSlice/getCommentById',
    async ({id}, {dispatch}) => {
        try {
            const comment = await commentService.getById(id);
            dispatch(setComment({data:comment}))
        } catch (e) {
            console.log(e);
        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: [],
        comment: null
    },
    reducers: {
        setComments: (state, action) => {
            state.comments = action.payload.data
        },
        setComment: (state, action) => {
            state.comment = action.payload.data
        }
    }
});

const commentReducer = commentSlice.reducer;

export default commentReducer;
export const {setComments, setComment} = commentSlice.actions;