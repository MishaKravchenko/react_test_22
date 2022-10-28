import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {UserAlbums} from "../../../components";


const UserAlbumsPage = () => {
    const {albums} = useSelector(state => state['userReducer']);

    return (
        <div>
            <div>
                {albums && albums.map(album => <UserAlbums key={album.id} album={album}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserAlbumsPage};