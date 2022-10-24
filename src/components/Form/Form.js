import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCarById} from "../../redux/slices/car.slices";

const Form = () => {

    const {carForUpdate} = useSelector(state => state['carReducer']);
    // const {carForUpdate} = useSelector(state => state.car);
    const {register, reset, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        if (carForUpdate.id) {
            dispatch(updateCarById({id: carForUpdate.id, car: data}))
        } else {
            dispatch(createCar({data}))
        }
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register("model")}/></label>
                <label>Price: <input type="text" {...register("price")}/></label>
                <label>Year: <input type="text" {...register("year")}/></label>
                <button>{carForUpdate.id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;