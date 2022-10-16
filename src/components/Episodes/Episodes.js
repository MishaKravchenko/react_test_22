import React from 'react';
import {Link} from "react-router-dom";

import "./Episodes.css";

const Episodes = ({episode: {id, name, air_date, episode, characters}}) => {
    return (
        <div className='episodes'>
            <b>{name}</b>
            <br/><small>{air_date}</small>
            <br/><i>{episode}</i>
            <br/><Link to={id + '/characters'} state={characters}>Characters</Link>
        </div>
    );
};

export default Episodes;