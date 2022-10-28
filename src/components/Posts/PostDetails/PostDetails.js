import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getComments} from "../../../redux/slices/post.slice/post.slice";

const PostDetails = ({post}) => {

    const {id, title, body} = post;
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div><b>Id:</b> {id}</div>
                <div><b>Title:</b> {title}</div>
                <div><b>Body:</b> {body}</div>
            </div>
            <div>
                <Link to={"comments"}>
                    <button onClick={() => dispatch(getComments({id}))}>GetPostComments</button>
                </Link>
            </div>
        </div>
    );
};

export {PostDetails};