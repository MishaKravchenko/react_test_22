import React from 'react';

const Comments = ({comment: {id, email}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {email}</div>
        </div>
    );
};

export default Comments;