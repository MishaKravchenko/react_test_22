import React, {useEffect, useState} from 'react';

import {CharacterService} from "../../services/character.service";
import baseURL, {urls} from "../../configs/urls";
import Characters from "../../components/Characters/Characters";
import './CharactersPage.css'

const CharactersPage = () => {

        const [characters, setCharacters] = useState([]);
        const [charactersPageInfo, setCharactersPageInfo] = useState([]);
        const [url, setUrl] = useState(baseURL + urls.characters);
        const [page, setPage] = useState(1);


        useEffect(() => {
            CharacterService.getAll(url).then(value => {
                setCharacters(value.results)
                setCharactersPageInfo(value.info)

                if (url.indexOf("=") >= 0)
                    setPage(url.split("=").pop())
                else
                    setPage(1)

            });
        }, [url, page]);

        const nextPage = () => {
            if (charactersPageInfo.next)
                setUrl(charactersPageInfo.next)
            else if (charactersPageInfo.next === null)
                setUrl(baseURL + urls.characters)
        }
        const prevPage = () => {
            if (charactersPageInfo.prev)
                setUrl(charactersPageInfo.prev)
            else if (charactersPageInfo.prev === null)
                setUrl(`${baseURL}${urls.characters}?page=${charactersPageInfo.pages}`)
        }

        return (
            <div>
                <div className='charactersPage'>
                    {characters.map(character => <Characters key={character.id} character={character}/>)}
                </div>
                <div className='buttons'>
                    <button onClick={prevPage}>Prev</button>
                    <span> --- [{page}] --- </span>
                    <button onClick={nextPage}>Next</button>
                </div>
            </div>
        );
    }
;

export {CharactersPage};