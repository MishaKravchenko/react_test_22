import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../redux/slices/comment.slice/comment.slice";
import {Comments} from "../../components";

const CommentsPage = () => {

    const dispatch = useDispatch();
    const {comments} = useSelector(state => state['commentReducer']);

    useEffect(() => {
        dispatch(getAllComments())
    }, [dispatch])

    return (
        <div>
            <div>
                {comments.map(comment => <Comments key={comment.id} comment={comment}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {CommentsPage};