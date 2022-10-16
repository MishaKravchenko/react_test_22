import React from 'react';
import {useLocation} from "react-router-dom";

import EpisodeCharacters from "../../components/EpisodeCharacters/EpisodeCharacters";

import './EpisodeCharactersPage.css'

const EpisodeCharactersPage = () => {

    const {state} = useLocation();

    return (
        <div className={'charactersPage'}>
            {state.map(characters => <EpisodeCharacters key={characters.split('/').pop()} characters={characters}/>)}
        </div>
    );
};

export {EpisodeCharactersPage};