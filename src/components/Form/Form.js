import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../service/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/validator";

const Form = ({update}) => {

    const [formError, setFormError] = useState({});

    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    // const submit = (car) => {
    //     carService.create(car).then(value => console.log(value)).catch(error => {
    //         setFormError(error.response.data)
    //     })
    // }

    const submit = async (car) => {
        try {
            const newCar = await carService.create(car);
            update(newCar);
        } catch (error) {
            setFormError(error.response.data)
        }
    }

    // watch(event => console.log(event))

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
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;