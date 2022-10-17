import React from 'react';
import {useLocation} from "react-router-dom";
import CharacterEpisodes from "../../../components/Characters/CharacterEpisodes/CharacterEpisodes";

const CharacterEpisodesPage = () => {

    const {state} = useLocation();

    return (
        <div className={'charactersPage'}>
            {state.map(url => <CharacterEpisodes key={url.split('/').pop()} url={url}/>)}
        </div>
    );
};

export default CharacterEpisodesPage;