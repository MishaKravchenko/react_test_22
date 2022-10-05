import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
import './Comment.css'

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comment => { setComments(comment)
            })
    }, [])
    return (
        <div className={"comments"}>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export default Comments;