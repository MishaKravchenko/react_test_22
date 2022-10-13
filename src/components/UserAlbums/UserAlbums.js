import React from 'react';
import {Link} from "react-router-dom";

const UserAlbums = ({albums}) => {
    const {id, title} = albums
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <Link to={id.toString() + "/photos"}>
            <button>Photos</button>
            </Link>
        </div>
    );
};

export default UserAlbums;