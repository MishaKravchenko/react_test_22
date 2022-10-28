import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getPostsById} from "../../../redux/slices/user.slice/user.slice";

const UserDetails = ({user}) => {

    const {id, name, username, email} = user;
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
            </div>
            <div>
                <Link to={"posts"}>
                    <button onClick={() => dispatch(getPostsById({id}))}>GetPosts</button>
                </Link>
            </div>
        </div>
    );
};

export {UserDetails};