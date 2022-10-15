import React, {useEffect, useState} from 'react';

import {carService} from "../../service/car.service";
import Car from "../Car/Car";

const Cars = ({trigger, update, setCarForUpdate}) => {

    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carService.getAll().then(value => setCars([...value]))
    },[trigger])

    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value} update={update} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;