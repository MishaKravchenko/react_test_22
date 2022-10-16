import React, {useEffect, useState} from 'react';

import {EpisodeService} from "../../services/episode.service";
import EpisodeCharacter from "../EpisodeCharacter/EpisodeCharacter";

import './EpisodeCharacters.css'

const EpisodeCharacters = ({characters}) => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        EpisodeService.getById(characters).then(value => setCharacter(value))
    }, [characters]);

    return (
        <div>
            <EpisodeCharacter key={character.id} character={character}/>
        </div>
    );
};

export default EpisodeCharacters;