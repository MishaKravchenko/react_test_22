import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../service/car.service";
import {carValidator} from "../../validators/validator";

const Form = ({update, carForUpdate: {id, model, price, year}}) => {

    const [formError, setFormError] = useState({});

    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id, model, price, year])

    const submit = async (car) => {
        try {
            let newCar;

            if (id) {
                newCar = await carService.updateById(id, car);
            } else {
                newCar = await carService.create(car);
            }

            update(newCar);
        } catch (error) {
            setFormError(error.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" defaultValue={''} {...register('model')} /></label>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <label>Price: <input type="text" defaultValue={''} {...register('price')} /></label>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <label>Year: <input type="text" defaultValue={''} {...register('year')} /></label>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <button>{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;