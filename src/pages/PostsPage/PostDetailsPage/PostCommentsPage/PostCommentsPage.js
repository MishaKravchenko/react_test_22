import React from 'react';
import {useSelector} from "react-redux";

import {PostComments} from "../../../../components";


const PostCommentsPage = () => {

    const {comments} = useSelector(state => state['postReducer']);

    return (
        <div>
            {comments && comments.map(comment => <PostComments key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostCommentsPage};