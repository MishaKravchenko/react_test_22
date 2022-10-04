import React from 'react';

const Comment = ({comment}) => {
    let {id, name, email, body} = comment;
    return (
        <div className={comment}>
            <h2>{id}.{name} - {email}</h2>
            <p>.{body}</p>
        </div>
    );
};

export default Comment;