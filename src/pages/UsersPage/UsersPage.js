import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import Users from "../../components/Users/Users";
import {Outlet} from "react-router-dom";
import css from "./UserPage.module.css";


const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, []);

    return (
        <div className={css.user_container}>
            <div>
                <h2>Users</h2>
                {users.map(value => <Users key={value.id} user={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;