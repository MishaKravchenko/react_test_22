import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div>
            <div>
                <Link to={id.toString()} state={post}> {title}</Link>
            </div>
        </div>
    );
};

export default Post;