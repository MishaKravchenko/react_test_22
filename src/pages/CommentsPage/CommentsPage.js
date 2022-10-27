import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../../redux/slices/comments.slice/comment.slice";
import Comments from "../../components/Comments/Comments";

const CommentsPage = () => {

    const dispatch = useDispatch();
    const {comments} = useSelector(state => state['commentReducer']);

    useEffect(()=>{
        dispatch(getAllComments())
    },[dispatch])
    return (
        <div>
            {comments.map(comment => <Comments key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;