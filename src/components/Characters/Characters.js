import React, {useEffect, useState} from 'react';

import {EpisodeService} from "../../services/episode.service";
import Character from "../Character/Character";

const Characters = ({characters}) => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        EpisodeService.getById(characters).then(value => setCharacter(value))
    }, [characters]);

    return (
        <div>
            <Character key={character.id} character={character}/>
        </div>
    );
};

export default Characters;