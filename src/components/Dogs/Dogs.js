import React from 'react';
import Dog from "./Dog";

const Dogs = ({dogs, dispatch}) => {
    return (
        <div>
            {dogs && dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export default Dogs;