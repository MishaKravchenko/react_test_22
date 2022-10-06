import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);

    const getUserId = (id) =>{
        console.log(id)
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])

    useEffect((id)=>{
        fetch('https://jsonplaceholder.typicode.com/users'+id)
                                .then(value => value.json())
                                .then(value => setUser(value))
    },[])

    return (
        <div>
            {user && <div>{user.id} -- {user.name} -- {user.email}</div>}
            {users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}
        </div>
    );
};

export default Users;