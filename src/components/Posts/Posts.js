import React from 'react';
import {Link} from "react-router-dom";

const Posts = ({post}) => {

    const {id, title} = post;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <Link to={id.toString()} state={post}>
                <button>GetPostDetails</button>
            </Link>
        </div>
    );
};

export default Posts;