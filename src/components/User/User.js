import React from 'react';

const User = ({user:{id, name, username, email}}) => {
    return (
        <div>
            <h2>{id}) {name}, {username}  </h2>
            <p>Email: {email}</p>

        </div>
    );
};

export default User;