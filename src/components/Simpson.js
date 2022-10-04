import React from 'react';

const Simpson = (props) => {
    let {name, surname, email, street, lat} = props;
    return (
        <div>
            <div>
                <h2>{name} {surname} </h2>
                <p>{email}</p>
                <p>{street} {lat}</p>
            </div>
        </div>
    );
};

export default Simpson;