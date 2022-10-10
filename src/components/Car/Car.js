import React from 'react';

const Car = ({car: {id, model, price, year}}) => {
    return (
        <div>
            <h2>{id}. {model}, {price}$ ({year}) </h2>
            <hr/>
        </div>
    );
};

export default Car;