// import './App.css';
// import {useState} from "react";
//
// function App() {
//     const [greeting, setGreeting] = useState('Hello');
//
//     // let greeting = "Hello";
//     const adder = () => {
//         // greeting+= "Amigos";
//         setGreeting(greeting+'!')
//         console.log(greeting);
//     }
//
//     return (
//         <div>
//             <button onClick={adder}>Click</button>
//             {greeting}
//         </div>
//     );
// }
//
// export default App;
import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const counter = () => {
        setCount(count + 1);
        console.log(count)
    }
    return (
        <div>
            <button onClick={counter}>Click</button>
            I clicked {count} times.
        </div>
    );
};

export default App;