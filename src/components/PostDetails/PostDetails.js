import React from 'react';
import {Link} from "react-router-dom";

const PostDetails = ({post}) => {

    const {id, title, body} = post;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <Link to={"comments"}>
            <button>GetComments</button>
            </Link>
        </div>
    );
};

export default PostDetails;