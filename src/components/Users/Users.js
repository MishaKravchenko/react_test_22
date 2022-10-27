import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getUserById} from "../../redux/slices/user.slice/user.slice";

const Users = ({user}) => {

    const {id, name, username} = user;
    const dispatch = useDispatch();


    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <Link to={id.toString()} state={user}>
                <button onClick={()=> dispatch(getUserById({id}))}>GetDetails</button>
            </Link>
        </div>
    );
};

export default Users;