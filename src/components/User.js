import React from 'react';

const User = ({user: {id, name, email}, getUserId}) => {
    return (
        <div>
            <h2>{id} -- {name} -- {email}</h2>
            <button onClick={() => getUserId(id)}>GetUserById</button>
        </div>
    );
};

export default User;