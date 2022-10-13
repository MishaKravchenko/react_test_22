import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserPosts from "../../components/UserPosts/UserPosts";

const UserPostsPage = () => {

    const [posts, setPosts] = useState([]);
    const {state} = useLocation();

    useEffect(() => {
        userService.getPostsById(state.id).then(value => setPosts(value))
    }, [state.id]);

    return (
        <div>
            <h2>Posts</h2>
            {posts.map(value => <UserPosts key={value.id} post={value}/>)}
        </div>
    );
};

export {UserPostsPage};