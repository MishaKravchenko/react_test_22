import React, {useEffect, useState} from 'react';
import Flight from "./Flight";
import '../App.css'

const Flights = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights => {
                setFlights(flights.filter(flight => flight.launch_year !== '2020'));
            })
    }, [])

    return (
        <div>
            <h1 className={"header"}>FLIGHTS</h1>
            <div className={"flights"}>
                {flights.map(value => <Flight key={value.flight_number} flight={value}/>)}
            </div>
        </div>
    );
};

export default Flights;