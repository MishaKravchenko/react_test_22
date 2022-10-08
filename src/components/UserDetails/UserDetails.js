import React from 'react';
import css from './UserDetails.module.css'

const UserDetails = ({user:{id, name, username, address:{street,city}},getUserId}) => {
    return (
        <div className={css.wrap}>
            <h2>{id} {name} {username}</h2>
            <p>{street}  {city}</p>
            <button onClick={()=>getUserId(id)}>UserPosts</button>
        </div>
    );
};

export default UserDetails;