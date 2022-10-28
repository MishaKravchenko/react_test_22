import React from 'react';
import {useSelector} from "react-redux";
import {UserPosts} from "../../../../components";


const UserPostsPage = () => {
    const {posts} = useSelector(state => state['userReducer']);

    return (
        <div>
            {posts && posts.map(post => <UserPosts key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostsPage};