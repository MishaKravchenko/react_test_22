import React, {useEffect, useState} from 'react';
import {CharacterService} from "../../../services/character.service";
import CharacterEpisode from "../CharacterEpisode/CharacterEpisode";

const CharacterEpisodes = ({url}) => {

    const [episode, setEpisode] = useState([]);

    useEffect(()=>{
        CharacterService.getById(url).then(value => setEpisode(value))
    },[url]);

    return (
        <div>
            <CharacterEpisode episode={episode}/>
        </div>
    );
};

export default CharacterEpisodes;