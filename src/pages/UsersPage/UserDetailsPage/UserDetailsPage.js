import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {UserDetails} from "../../../components";


const UserDetailsPage = () => {
    const {user} = useSelector(state => state['userReducer']);

    return (
        <div>
            <div>
                {user && <UserDetails user={user}/>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserDetailsPage};