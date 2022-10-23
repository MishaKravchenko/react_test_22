import React from 'react';
import {useDispatch} from "react-redux";
import {carToUpdate, deleteCarThunk} from "../../redux/slices/car.slices";

const Car = ({car}) => {

    const {id, model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                {id}. {model} {price} {year}
            </div>
            <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>
            <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
        </div>
    );
};

export default Car;