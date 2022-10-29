import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createCar, updateCar} from "../../redux/slices/car.slice/car.slice";

const Form = () => {

    const {carForUpdate} = useSelector(state => state['carReducer']);
    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        if (carForUpdate.id) {
            dispatch(updateCar({id: carForUpdate.id, car: data}))
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
                <label> Model: <input type="text" placeholder={"model"} {...register("model")}/></label>
                <label> Year: <input type="text" placeholder={"year"} {...register("year")}/></label>
                <label> Price: <input type="text" placeholder={"price"} {...register("price")}/></label>
                <button> Save</button>
            </form>
        </div>
    );
};

export default Form;