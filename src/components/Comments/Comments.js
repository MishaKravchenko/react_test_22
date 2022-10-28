import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getCommentById} from "../../redux/slices/comments.slice/comment.slice";

const Comments = ({comment}) => {

    const {id, email} = comment
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>Id: {id}</div>
                <div>Title: {email}</div>
            </div>
            <div>
                <Link to={id.toString()} state={comment}>
                    <button onClick={() => dispatch(getCommentById({id}))}>GetCommentDetails</button>
                </Link>
            </div>
        </div>
    );
};

export {Comments};