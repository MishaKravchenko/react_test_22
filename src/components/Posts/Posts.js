import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {postService} from "../../services/post.service";

const Posts = ({userId, getPostId}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getById(userId).then(value => setPosts(value))
    }, [userId])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} getPostId={getPostId}/>)}
        </div>
    );
};

export default Posts;