import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userService} from "../../../services/user.service";
import {albumService} from "../../../services/album.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async () => {
        try {
            return await userService.getAll()
        } catch (e) {
            console.log(e);
        }
    }
);

export const getUserById = createAsyncThunk(
    'userSlice/getUserById',
    async ({id}, {dispatch}) => {
        try {
            const user = await userService.getById(id);
            dispatch(setById({data: user}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const getPostsById = createAsyncThunk(
    'userSlice/getPostsById',
    async ({id}, {dispatch}) => {
        try {
            const posts = await userService.getPosts(id);
            dispatch(setPosts({data: posts}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const getAlbumsById = createAsyncThunk(
    'userSlice/getAlbumsById',
    async ({id}, {dispatch}) => {
        try {
            const albums = await albumService.getAlbumsById(id);
            dispatch(setAlbums({data: albums}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const getPhotosById = createAsyncThunk(
    'userSlice/getPhotosById',
    async ({id}, {dispatch}) => {
        try {
            const photos = await albumService.getPhotoByAlbumsId(id);
            dispatch(setPhotos({data: photos}))
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
        error: null,
        posts: [],
        albums: [],
        photos: []
    },
    reducers: {
        setById: (state, action) => {
            state.user = action.payload.data;
        },
        setPosts: (state, action) => {
            state.posts = action.payload.data;
        },
        setAlbums: (state, action) => {
            state.albums = action.payload.data
        },
        setPhotos: (state, action) => {
            state.photos = action.payload.data
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

export const {setById, setPosts, setAlbums, setPhotos} = userSlice.actions;
export default userReducer;