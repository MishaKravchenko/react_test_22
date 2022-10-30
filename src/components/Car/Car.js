import React from 'react';

const Car = ({car}) => {

    const {id, model, price, year} = car;

    return (
        <div>
            <h3>{id}. Model: {model}</h3>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
        </div>
    );
};

export default Car;