import React, {useEffect, useState} from 'react';
import User from "./components/User";

const App = () => {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState({});
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, []);

    const submit = (e) => {
        e.preventDefault()
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(value => value.json())
                .then(value => setUser(value))
    }

    const selectHandler = (e) => {
        const id = e.target.value
        setUserId(id)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <select onChange={selectHandler}>
                    {users.map(value => <option key={value.id} value={value.id}>{value.id}) {value.name} - {value.username}</option>)}
                </select>
                <button>Submit</button>
            </form>
            {user && <User user={user}/> }
        </div>
    );
};

export default App;