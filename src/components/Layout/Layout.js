import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import css from './Layout.module.css';


const Layout = () => {

    return (
        <div>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users" >Users</NavLink>
                <NavLink to="/posts" >Posts</NavLink>
                <NavLink to="/about" >About</NavLink>
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
            <div className={css.footer}>
                @ReactRouterDom
            </div>
        </div>
    );
};

export default Layout;