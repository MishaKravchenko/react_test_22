import React from 'react';
import {carService} from "../../service/car.service";

const Car = ({car, update, setCarForUpdate}) => {

    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        update({})
    }

    return (
        <div>
            <h2>{id}. {model}, {price}$ ({year}) </h2>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={() => deleteCar()}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;