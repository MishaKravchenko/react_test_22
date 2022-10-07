import React from 'react';
import css from './User.module.css'

const User = ({user, getUser}) => {
    const {id, name, username} = user;

    return (
        <div className={css.wrap}>
            <h2>{id}) {name} {username}</h2>
            <button onClick={() => getUser(user)}>UserDetails</button>
        </div>
    );
};

export default User;