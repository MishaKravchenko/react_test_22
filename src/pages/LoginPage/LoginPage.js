import {useLocation, useNavigate} from "react-router-dom";

import React from 'react';
import {useAuth} from "../../hooks/useAuth";


const LoginPage = () => {
    const {login} = useAuth();
    const navigate = useNavigate();
    const {state:{pathname}} = useLocation();

    const submit = (e) => {
        e.preventDefault();
        const user = e.target.username.value;
        login(user, ()=> navigate(pathname, {replace:true}))
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <label>Username: <input type="text" name={"username"}/></label>
                <button>Login</button>
            </form>
        </div>
    );
};

export {LoginPage};