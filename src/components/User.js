import React from 'react';

const User = (props) => {
    let {id, name, username} = props;
    return (
        <div>
            <h2>{id}. User:{name}</h2>
            <p>{username}</p>
        </div>
    );
};

export default User;