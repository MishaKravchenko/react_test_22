import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";
import {postService} from "../../services/post.service";
import PostDetails from "../../components/PostDetails/PostDetails";
import css from "../PostDetailsPage/PostDetailsPage.module.css";

const PostDetailsPage = () => {

    const [post, setPost] = useState(null);
    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            postService.getById(id).then(value => setPost(value))
        } else {
            setPost(state)
        }
    }, [id, state]);


    return (
        <div className={css.postDetails_container}>
            <div>{post && <PostDetails post={post}/>}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostDetailsPage;