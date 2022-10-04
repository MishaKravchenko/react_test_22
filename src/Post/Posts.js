import React, {useEffect, useState} from 'react';
import Post from "./Post";
import './Post.css'

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(post => {
                setPosts(post)
            })
    }, [])
    return (
        <div className={"posts"}>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;