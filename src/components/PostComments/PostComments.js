import React from 'react';

const PostComments = ({comments}) => {

    const {id, name, email, body} = comments;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default PostComments;