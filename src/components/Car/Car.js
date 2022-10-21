import React from 'react';

const Car = ({car: {id, model, price, year}, deleteCar}) => {
    return (
        <div>
            <div>
                {id}. {model} {price} {year}
            </div>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};

export default Car;