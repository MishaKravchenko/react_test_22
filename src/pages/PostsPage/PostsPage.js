import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../redux/slices/post.slice/post.slice";
import {Posts} from "../../components";

const PostsPage = () => {

    const dispatch = useDispatch();
    const {posts} = useSelector(state => state['postReducer']);

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <div>
            <div>
                {posts.map(post => <Posts key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};