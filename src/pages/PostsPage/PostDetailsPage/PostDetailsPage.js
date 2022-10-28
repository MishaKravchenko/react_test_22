import React from 'react';
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {PostDetails} from "../../../components";


const PostDetailsPage = () => {

    const {post} = useSelector(state => state['postReducer']);

    return (
        <div>
            <div>
                {post && <PostDetails post={post}/>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostDetailsPage};