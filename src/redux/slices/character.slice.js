import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import {characterService} from "../../services/character.service";

export const getAllCharacters = createAsyncThunk(
    'characterSlice/getAllCharacters',
    async (_, {dispatch}) => {
        try {
            await characterService.getAll();
        }catch (e) {
            console.log(e);
        }
    }
);

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState: {
        characters: [],
        url: '',
        charactersPageInfo: [],
        page: 1,
        filteredCharacters: []
    },
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload.data
        }
    }
});

const characterReducer = characterSlice.reducer;

export default characterReducer;

export const {setCharacters} = characterSlice.actions;
