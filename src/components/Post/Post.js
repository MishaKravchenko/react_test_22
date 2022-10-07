import React from 'react';

const Post = ({post: {id, title, body}}) => {
    return (
        <div>
            <h2>{id}.{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;