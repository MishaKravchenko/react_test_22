import React, {useEffect, useState} from 'react';
import {CarService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarService.getAll().then(value => setCars(value))
    }, []);

    return (
        <div>
            <h1>Cars</h1>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;