import React from 'react';
import {useSelector} from "react-redux";

import {CommentDetails} from "../../../components";


const CommentDetailsPage = () => {

    const {comment} = useSelector(state => state['commentReducer']);

    return (
        <div>
            {comment && <CommentDetails comment={comment}/>}
        </div>
    );
};

export {CommentDetailsPage};