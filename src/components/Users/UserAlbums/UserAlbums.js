import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getPhotosById} from "../../../redux/slices/user.slice/user.slice";

const UserAlbums = ({album: {userId, id, title}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>Id: {id}</div>
            <div>userId: {userId}</div>
            <div>Title: {title}</div>
            <Link to={id.toString() + '/photos'}>
                <button onClick={()=> dispatch(getPhotosById({id}))}>GetPhotos</button>
            </Link>
        </div>
    );
};

export {UserAlbums};