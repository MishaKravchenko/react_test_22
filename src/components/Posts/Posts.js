import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getPostsById} from "../../redux/slices/post.slice/post.slice";

const Posts = ({post}) => {

    const {id, title} = post;
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
            </div>
            <div>
                <Link to={id.toString()} state={post}>
                    <button onClick={() => dispatch(getPostsById({id}))}>GetPostDetails</button>
                </Link>
            </div>
        </div>
    );
};

export {Posts};