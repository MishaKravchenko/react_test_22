import React from 'react';

const UserAlbumPhotos = ({photos}) => {
    const {id, title, thumbnailUrl} = photos;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div><img src={thumbnailUrl} alt={id}/></div>
        </div>
    );
};

export default UserAlbumPhotos;