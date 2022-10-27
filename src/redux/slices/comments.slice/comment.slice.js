import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CommentService} from "../../../services/comment.service";

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_,{rejectWithValue,dispatch}) => {
        try {
            const comments = await CommentService.getAll();
            dispatch(setComments({data:comments}))
        }catch (e) {
            console.log(e);
            rejectWithValue(e.message)
        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: []
    },
    reducers: {
        setComments: (state, action) => {
            state.comments = action.payload.data
        }
    }
});

const commentReducer = commentSlice.reducer;

export default commentReducer;
export const {setComments} = commentSlice.actions;