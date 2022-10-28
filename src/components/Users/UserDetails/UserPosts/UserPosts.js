import React from 'react';

const UserPosts = ({post: {id, title, body}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {UserPosts};