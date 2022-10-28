import React from 'react';

const CommentDetails = ({comment: {id, name, email, body}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {CommentDetails};