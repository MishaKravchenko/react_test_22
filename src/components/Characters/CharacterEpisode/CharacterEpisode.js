import React from 'react';

import './CharacterEpisode.css'

const CharacterEpisode = ({episode: {id, name, air_date, episode}}) => {

    return (
        <div className='character_episode'>
            <b>{name}</b>
            <small>{air_date}</small>
            <i>{episode}</i>
        </div>

    );
};

export default CharacterEpisode;