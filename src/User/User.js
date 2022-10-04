import React from 'react';
import './User.css'

const User = ({user}) => {
    let {id, name, username, address, geo} = user;
    return (
        <div className={"user"}>
            <h2>{id}.{name} -- {username}</h2>  -- {address.street} -- {address.geo.lat}
        </div>
    );
};

export default User;