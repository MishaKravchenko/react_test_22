import React, {useEffect, useState} from 'react';
import User from "./User";
import './User.css'

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(user => {
                setUsers(user)
            })
    }, []);
    return (
        <div className={"users"}>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;