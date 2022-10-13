import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import UserAlbumPhotos from "../../components/UserAlbumPhotos/UserAlbumPhotos";

const UserAlbumPhotosPage = () => {

    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(()=>{
        albumService.getPhotoByAlbumsId(albumId).then(value => setPhotos([...value]))
    }, [albumId]);

    return (
        <div>
            <h2>Photos</h2>
            {photos.map(value => <UserAlbumPhotos key={value.id} photos={value}/>)}
        </div>
    );
};

export {UserAlbumPhotosPage};