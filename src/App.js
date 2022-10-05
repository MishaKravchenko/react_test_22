import './App.css';
import {useEffect, useState} from "react";
import User from "./components/User";

function App() {
    let [usersList, setUsersList] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                setUsersList(users)
            })
    }, [])

    return (
        <div>
            {usersList.map(user => <User key={user.id} id={user.id} name={user.name} username={user.username}/>
            )}
        </div>
    );
}

export default App;
