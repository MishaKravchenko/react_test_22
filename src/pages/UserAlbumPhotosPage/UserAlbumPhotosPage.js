import React, {useEffect, useState} from 'react';
import {albumService} from "../../services/album.service";
import {useParams} from "react-router-dom";
import UserAlbumPhotos from "../../components/UserAlbumPhotos/UserAlbumPhotos";

const UserAlbumPhotosPage = () => {

    const [photos, setPhotos] = useState([]);
    const params = useParams();

    useEffect(()=>{
        albumService.getPhotoByAlbumsId(params.id).then(value => setPhotos([...value]))
    }, [params.id]);

    return (
        <div>
            <h2>Photos</h2>
            {photos.map(value => <UserAlbumPhotos key={value.id} photos={value}/>)}
        </div>
    );
};

export default UserAlbumPhotosPage;