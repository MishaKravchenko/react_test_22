import React from 'react';

const Characters = ({character: {id, name, status, species, image}}) => {

    return (
        <div className='character'>
            <b>{id}) {name}</b>
            <br/><small>{status}</small>
            <br/><u>Species</u>: <i>{species}</i>
            <br/><img src={image} alt={name}/>
        </div>
    );
};

export default Characters;