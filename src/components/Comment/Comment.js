import React from 'react';
import css from './Comment.module.css'

const Comment = ({comment: {id, name, email, body}}) => {
    return (
        <div className={css.wrap}>
            <h2>{id}. {name} {email}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Comment;