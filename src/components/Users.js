import React, {useEffect, useState} from 'react';

import User from "./User";
import {userService} from "../services/user.service";


const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    const getUserById = (id) => {
        userService.getUserById(id)
            .then(value => setUser(value))
    }

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    return (
        <div>
            {user && <div>{user.id} -- {user.name} -- {user.username} -- {user.email}</div>}
            <div>{users.map(value => <User key={value.id} user={value} getUserById={getUserById}/>)}</div>
        </div>
    );
};

export default Users;