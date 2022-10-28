import React from 'react';
import {useSelector} from "react-redux";
import {UserAlbumPhotos} from "../../../../components";


const UserAlbumPhotosPage = () => {
    const {photos} = useSelector(state => state['userReducer']);

    return (
        <div>
            {photos && photos.map(photo => <UserAlbumPhotos key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {UserAlbumPhotosPage};