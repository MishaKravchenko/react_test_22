import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {UserService} from "../../../services/user.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async () => {
        try {
            return await UserService.getAll()
        } catch (e) {
            console.log(e);
        }
    }
);

export const getUserById = createAsyncThunk(
    'userSlice/getUserById',
    async ({id}, {dispatch}) => {
        try {
            const user = await UserService.getById(id);
            dispatch(setById({data: user}))
        } catch (e) {
            console.log(e);
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        user: null,
        status: null,
        error: null
    },
    reducers: {
        setById: (state, action) => {
            state.user = action.payload.data;
        }
    },
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.users = action.payload;
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }

    }

});

const userReducer = userSlice.reducer;

export const {setById} = userSlice.actions;
export default userReducer;