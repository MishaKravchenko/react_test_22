import React from 'react';
import Car from "../Car/Car";

const Cars = ({cars, deleteCar}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar}/>)}
        </div>
    );
};

export default Cars;