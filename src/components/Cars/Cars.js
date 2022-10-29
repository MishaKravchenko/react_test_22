import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar, setCarToUpdate} from "../../redux/slices/car.slice/car.slice";

const Cars = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(setCarToUpdate({car}))}>Update</button>
            <button onClick={() => dispatch(deleteCar({id}))}>Delete</button>
        </div>
    );
};

export default Cars;