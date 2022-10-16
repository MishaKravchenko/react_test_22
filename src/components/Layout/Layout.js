import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className='app'>
            <header>
                <NavLink to={'/episodes'}>
                    Rick and Morty
                </NavLink>
            </header>
            <div className='layout'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;