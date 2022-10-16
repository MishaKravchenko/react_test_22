import React from 'react';

const Character = ({character:{id, name, status, species, image}}) => {
    return (
        <div>
            <div className='character'>
                <b>{id}) {name}</b>
                <br/><small>{status}</small>
                <br/><u>Species</u>: <i>{species}</i>
                <br/><img src={image} alt={name}/>
            </div>
        </div>
    );
};

export default Character;