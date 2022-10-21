import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar} from "../../redux/slices/car.slices";

const Car = ({car: {id, model, price, year}}) => {

    const dispatch = useDispatch();
    return (
        <div>
            <div>
                {id}. {model} {price} {year}
            </div>
            <button onClick={() => dispatch(deleteCar({id}))}>Delete</button>
        </div>
    );
};

export default Car;