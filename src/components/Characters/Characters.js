import React from 'react';
import {Link} from "react-router-dom";

const Characters = ({character: {id, name, status, species, image, episode}}) => {

    return (
        <div className='character'>
            <b>{id}) {name}</b>
            <br/><small>{status}</small>
            <br/><u>Species</u>: <i>{species}</i>
            <br/><img src={image} alt={name}/>
            <br/><Link to={id + '/episodes'} state={episode}>Characters</Link>
        </div>
    );
};

export default Characters;