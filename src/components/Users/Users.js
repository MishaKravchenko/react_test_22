import React from 'react';
import {Link} from "react-router-dom";

const Users = ({user}) => {

    const {id, name} = user;

    return (
        <div>
            <h3>{id}) {name}</h3>
            <Link to={id.toString()} state={user}>
                <button>UserDetails</button>
            </Link>
            <Link to={id.toString() + "/albums"}>
                <button>Albums</button>
            </Link>
        </div>
    );
};

export default Users;