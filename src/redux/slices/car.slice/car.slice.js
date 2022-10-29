import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../../services/car.service";

export const getAllCars = createAsyncThunk(
    "carSlice/getAllCars",
    async (_, {dispatch}) => {
        try {
            const cars = await carService.getAll();
            dispatch(setAll({data: cars}))
        } catch (e) {
            console.log(e);
        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(setCar({data: newCar}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(setDeleteCar({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({car, id}, {dispatch}) => {
        try {
            const newCar = await carService.updateById(car, id);
            dispatch(setUpdateCar({car: newCar}))
        } catch (e) {
            console.log(e);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        carForUpdate: {}
    },
    reducers: {
        setAll: (state, action) => {
            state.cars = action.payload.data
        },
        setCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        setDeleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        setCarToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        },
        setUpdateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice({index}, 1, action.payload.car)
        }
    }
});

const carReducer = carSlice.reducer;

export default carReducer;
export const {setAll, setCar, setDeleteCar, setCarToUpdate, setUpdateCar} = carSlice.actions;