import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {useParams} from "react-router-dom";
import PostComments from "../../components/PostComments/PostComments";

const PostCommentsPage = () => {

    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        postService.getCommentsById(id).then(value => setComments([...value]))
    }, [id]);

    return (
        <div>
            {comments && comments.map(value => <PostComments key={value.id} comments={value}/>)}
        </div>
    );
};

export default PostCommentsPage;