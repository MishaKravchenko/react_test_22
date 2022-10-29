import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCars} from "../../redux/slices/car.slice/car.slice";
import Cars from "../../components/Cars/Cars";
import Form from "../../components/Form/Form";

const CarsPage = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state['carReducer']);

    useEffect(() => {
        dispatch(getAllCars())
    }, [dispatch])

    return (
        <div>
            <Form/>
            {cars && cars.map(car => <Cars key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsPage;