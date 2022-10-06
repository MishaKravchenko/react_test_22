import React from 'react';

const User = ({user: {id, name, username}, getUserById}) => {

    return (
        <div>
            <h2>{id} -- {name} -- {username}</h2>
            <button onClick={()=>getUserById(id)}>GetById</button>
        </div>
    );
};

export default User;