import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PostService} from "../../../services/post.service";

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue, dispatch}) => {
        try {
           const posts = await PostService.getAll();
            dispatch(setPosts({data: posts}))
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: []
    },
    reducers: {
        setPosts: (state, action) =>{
            state.posts = action.payload.data
        }
    }
})

const postReducer = postSlice.reducer;

export const {setPosts} = postSlice.actions;
export default postReducer;
