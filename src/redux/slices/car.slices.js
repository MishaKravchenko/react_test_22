import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../../services/car.service";

export const getAllCarsThunk = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const createCarThunk = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCarThunk',
    async ({id, car}, {dispatch}) => {
        try {
            const newCar = await carService.updateById(id, car);
            dispatch(updateCar({car: newCar}))
        } catch (e) {
            console.log(e);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null,
        carForUpdate: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        },
        updateCar:(state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = action.payload.car
        }
    },
    extraReducers: {
        [getAllCarsThunk.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCarsThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCarsThunk.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const carReducer = carSlice.reducer;

export const {addCar, deleteCar, carToUpdate, updateCar} = carSlice.actions;
export default carReducer;