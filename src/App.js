import React, {useReducer} from 'react';

import Form from "./components/Form/Form";
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CAT":
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
        case "ADD_DOG":
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
        case "DEL_CAT":
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        case "DEL_DOG":
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
        default:
            return state
    }
}

const App = () => {

    const [{dogs, cats}, dispatch] = useReducer(reducer, {dogs: [], cats: []});

    return (
        <div>
            <div>
                <Form dispatch={dispatch}/>
            </div>
            <div>
                <div><Cats cats={cats} dispatch={dispatch}/></div>
                <div><Dogs dogs={dogs} dispatch={dispatch}/></div>
            </div>
        </div>
    );
};

export default App;