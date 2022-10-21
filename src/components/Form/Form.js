import React from 'react';
import {useForm} from "react-hook-form";

const Form = ({getFormCar}) => {

    const {register, reset, handleSubmit} = useForm();

    const submit = (data) => {
        getFormCar(data)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register("model")}/></label>
                <label>Price: <input type="text" {...register("price")}/></label>
                <label>Year: <input type="text" {...register("year")}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;