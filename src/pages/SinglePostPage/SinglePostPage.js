import React, {useEffect, useState} from 'react';
import {useLocation, useParams, useNavigate} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    const {state} = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id])

    const toHome = () => {
        navigate('/', {replace: true})
    }

    const toBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={toHome}>Home</button>
            <button onClick={toBack}>Back</button>
            {post &&
            <div>
                <div>Id: {post.id}</div>
                <div>userId: {post.userId}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
            </div>}
        </div>
    );
};

export {SinglePostPage};