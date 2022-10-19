import {useReducer} from "react";

import './App.css';

const reducer = (state, action) => {
    state = {...state, count2: state.count2 + 1}
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: action.payload}
        default:
            throw new Error("MyError")
    }
    return state
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0});

    return (
        <div>
            <div>{state.count1}</div>
            <div>{state.count2}</div>
            <button onClick={() => dispatch({type: 'inc'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec'})}>DIC</button>
            <button onClick={() => dispatch({type: 'reset', payload: 8})}>RESET</button>
        </div>
    );
}

export default App;
