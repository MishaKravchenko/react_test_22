import React from 'react';
import {useLocation} from "react-router-dom";

import EpisodeCharacters from "../../../components/Episodes/EpisodeCharacters/EpisodeCharacters";
import './EpisodeCharactersPage.css'

const EpisodeCharactersPage = () => {

    const {state} = useLocation();

    return (
        <div className={'charactersPage'}>
            {state.map(url => <EpisodeCharacters key={url.split('/').pop()} url={url}/>)}
        </div>
    );
};

export {EpisodeCharactersPage};