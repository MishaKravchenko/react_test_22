import './App.css';
import {useReducer} from "react";
import Counter from "./components/Counter/Counter";

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case'count1':
            return {...state, count1: state.count1 + payload}
        case'count2':
            return {...state, count2: state.count2 + payload}
        case'count3':
            return {...state, count3: state.count3 + payload}

        case'reset':
            return {...state, ['count' + payload]: 0}

        default:
            console.error('Unknown type');
            return state
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div className={'wrapper'}>
            <Counter state={state} dispatch={dispatch} counterNumber={1}/>
            <Counter state={state} dispatch={dispatch} counterNumber={2}/>
            <Counter state={state} dispatch={dispatch} counterNumber={3}/>
        </div>
    );
}

export default App;
