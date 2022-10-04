import React from 'react';
import './User.css'

const User = ({user:{id, name, username, street}}) => {

    return (
        <div className={"userBox"}>
            <h2>{id}. {name}</h2>
            <p>{username} - {street}</p>
        </div>
    );
};

export default User;