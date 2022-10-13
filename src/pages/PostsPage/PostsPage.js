import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Posts from "../../components/Posts/Posts";
import css from "./PostPage.module.css";
import {Outlet} from "react-router-dom";


const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, []);

    return (
        <div className={css.post_container}>
            <div>
                <h1>Posts</h1>
                {posts.map(value => <Posts key={value.id} post={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;