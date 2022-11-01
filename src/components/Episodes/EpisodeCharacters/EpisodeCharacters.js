import React, {useEffect, useState} from 'react';

import {episodeService} from "../../../services/episode.service";
import EpisodeCharacter from "../EpisodeCharacter/EpisodeCharacter";
import './EpisodeCharacters.css'

const EpisodeCharacters = ({url}) => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        episodeService.getById(url).then(value => setCharacter(value))
    }, [url]);

    return (
        <div>
            <EpisodeCharacter character={character}/>
        </div>
    );
};

export default EpisodeCharacters;