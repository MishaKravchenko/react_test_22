import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/comments.service";
import Comment from "../Comment/Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentsService.getById(postId).then(value => setComments(value))
    }, [postId])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;