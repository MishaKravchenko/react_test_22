import React from 'react';

const Cat = ({cat: {id, name}, dispatch}) => {

    const deleteCat = () => {
        dispatch({type: "DEL_CAT", payload: {id}})
    }

    return (
        <div>
            {name}
            <button onClick={deleteCat}>Delete</button>
        </div>
    );
};

export default Cat;