import React, {useEffect, useState} from 'react';

import {CharacterService} from "../../services/character.service";
import baseURL, {urls} from "../../configs/urls";
import Characters from "../../components/Characters/Characters";

const CharactersPage = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        CharacterService.getAll(baseURL + urls.characters).then(value => setCharacters(value.results))
    },[]);

    return (
        <div>
            {characters.map(character => <Characters key={character.id} character={character}/>)}
        </div>
    );
};

export {CharactersPage};