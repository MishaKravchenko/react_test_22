import React from 'react';
import {useLocation} from "react-router-dom";

import Characters from "../../components/Characters/Characters";

import './CharactersPage.css'

const CharactersPage = () => {

    const {state} = useLocation();

    return (
        <div className={'charactersPage'}>
            {state.map(characters => <Characters key={characters.split('/').pop()} characters={characters}/>)}
        </div>
    );
};

export {CharactersPage};