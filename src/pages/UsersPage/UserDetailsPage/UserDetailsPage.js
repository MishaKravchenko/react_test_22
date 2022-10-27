import React from 'react';
import {useSelector} from "react-redux";

import UserDetails from "../../../components/Users/UserDetails/UserDetails";

const UserDetailsPage = () => {
    const {user} = useSelector(state => state['userReducer']);

    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export default UserDetailsPage;