import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import {useState} from "react";

function App() {

    const [cars, setCars] = useState([]);

    const getFormCar = (data) => {
        setCars([...cars, {id: new Date().getDate(), ...data}])
    }

    const deleteCar = (id) => {
        setCars(cars.filter(car => car.id !== id))
    }

    return (
        <div>
            <Form getFormCar={getFormCar}/>
            <Cars cars={cars} deleteCar={deleteCar}/>
        </div>
    );
}

export default App;
