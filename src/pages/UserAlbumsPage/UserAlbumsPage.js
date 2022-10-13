import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";
import UserAlbums from "../../components/UserAlbums/UserAlbums";
import css from "./UserAlbumsPage.module.css";
import {albumService} from "../../services/album.service";


const UserAlbumsPage = () => {

    const [albums, setAlbums] = useState([]);
    // const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        albumService.getAlbumsById(id).then(value => setAlbums([...value]))
    }, [id]);


    return (
        <div className={css.userAlbums_container}>
            <div>
                <h2>Albums</h2>
                {albums && albums.map(value => <UserAlbums key={value.id} albums={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserAlbumsPage;