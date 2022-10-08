import React from 'react';
import css from "../Post/Post.module.css";

const Post = ({post: {id, title, body}, getPostId}) => {
    return (
        <div className={css.post_container}>
            <div className={css.wrap}>
                <h2>{id}.{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <button onClick={() => getPostId(id)}>GetPostComments</button>
            </div>
        </div>
    );
};

export default Post;