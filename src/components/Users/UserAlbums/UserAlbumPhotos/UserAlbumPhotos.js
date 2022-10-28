import React from 'react';

const UserAlbumPhotos = ({photo: {id, title, thumbnailUrl}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <img src={thumbnailUrl} alt={title}/>
        </div>
    );
};

export {UserAlbumPhotos};