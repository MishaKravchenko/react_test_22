import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Posts from "../../components/Posts/Posts";
import {getAllPosts} from "../../redux/slices/post.slice/post.slice";

const PostsPage = () => {

    const dispatch = useDispatch();
    const {posts} = useSelector(state => state['postReducer']);

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <div>
            {posts.map(post => <Posts key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;