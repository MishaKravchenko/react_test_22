import React from 'react';

const PostComments = ({comment: {id, name, email, body}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {PostComments};