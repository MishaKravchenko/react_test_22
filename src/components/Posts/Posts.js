import React from 'react';

const Posts = ({post: {id, title}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export default Posts;