import React from 'react';

const LocationResident = ({resident: {id, name, status, species, image}}) => {
    return (
        <div className='residents'>
            <b>{id}) {name}</b>
            <br/><small>{status}</small>
            <br/><u>Species</u>: <i>{species}</i>
            <br/><img src={image} alt={name}/>
        </div>
    );
};

export default LocationResident;