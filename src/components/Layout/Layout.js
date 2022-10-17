import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Layout.css';

const Layout = () => {
    return (
        <div className='app'>
            <header>
                <NavLink to={'/episodes'}>
                    Episodes
                </NavLink>
                <NavLink to={'/characters'}>
                    Characters
                </NavLink>
                <NavLink to={'/locations'}>
                    Location
                </NavLink>
            </header>
            <div className='outlet'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;