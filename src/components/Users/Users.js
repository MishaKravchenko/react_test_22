import React from 'react';
import User from "../User/User";

const Users = ({filteredUsers}) => {

    return (
        <div>
            {filteredUsers.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;