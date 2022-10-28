import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../../services/post.service";

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const posts = await postService.getAll();
            dispatch(setPosts({data: posts}))
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
);

export const getPostsById = createAsyncThunk(
    'postSlice/getPostsById',
    async ({id}, {dispatch}) => {
        try {
            const post = await postService.getById(id);
            dispatch(setPost({data: post}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const getComments = createAsyncThunk(
    'postSlice/getComments',
    async ({id}, {dispatch}) => {
        try {
            const comments = await postService.getComments(id);
            dispatch(setComments({data: comments}))
        } catch (e) {
            console.log(e);
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        post: null,
        comments: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload.data
        },
        setPost: (state, action) => {
            state.post = action.payload.data
        },
        setComments: (state, action) => {
            state.comments = action.payload.data
        }
    }
})

const postReducer = postSlice.reducer;

export const {setPosts, setPost, setComments} = postSlice.actions;
export default postReducer;
