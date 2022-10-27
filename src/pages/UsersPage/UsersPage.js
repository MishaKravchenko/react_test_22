import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {getAllUsers} from "../../redux/slices/user.slice/user.slice";
import Users from "../../components/Users/Users";

const UsersPage = () => {

    const dispatch = useDispatch();
    const {users, status, error} = useSelector(state => state['userReducer']);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])


    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {users.map(user => <Users key={user.id} user={user}/>)}
            <Outlet/>
        </div>
    );
};

export default UsersPage;