import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import {useLocation, useParams, Outlet, Link} from "react-router-dom";
import UserDetails from "../../components/UserDetails/UserDetails";
import css from "./UserDetailsPage.module.css";


const UserDetailsPage = () => {
        const [user, setUser] = useState(null);
        const {state} = useLocation();
        const {id} = useParams();


        useEffect(() => {
            if (!state) {
                userService.getById(id).then(value => setUser(value))
            } else {
                setUser(state)
            }
        }, [id, state])
        return (
            <div className={css.userDetails_container}>
                <div><h2>UserDetails</h2>{user && <UserDetails user={user}/>}</div>
                <Link to={"posts"} state={user}>
                    <button>GetPosts</button>
                </Link>
                <div><Outlet/></div>
            </div>
        );
    }
;

export default UserDetailsPage;