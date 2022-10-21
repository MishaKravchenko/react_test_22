import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarThunk} from "../../redux/slices/car.slices";

const Car = ({car: {id, model, price, year}}) => {

    const dispatch = useDispatch();
    return (
        <div>
            <div>
                {id}. {model} {price} {year}
            </div>
            <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
        </div>
    );
};

export default Car;