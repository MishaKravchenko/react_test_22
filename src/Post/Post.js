import React from 'react';
import './Post.css'

const Post = ({post}) => {
    let {id, title, body} = post
    return (
        <div className={"post"}>
            <h2>{id} {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;