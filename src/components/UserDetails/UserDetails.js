import React from 'react';

const UserDetails = ({user:{id, name, username, address:{street,city}},getUserId}) => {
    return (
        <div>
            <h2>{id} {name} {username}</h2>
            <p>{street}  {city}</p>
            <button onClick={()=>getUserId(id)}>UserPosts</button>
        </div>
    );
};

export default UserDetails;