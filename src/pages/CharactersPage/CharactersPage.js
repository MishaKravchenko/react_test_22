import React, {useEffect, useState} from 'react';

import {characterService} from "../../services/character.service";
import baseURL, {urls} from "../../configs/urls";
import Characters from "../../components/Characters/Characters";
import './CharactersPage.css'
import Form from "../../components/Form/Form";

const CharactersPage = () => {
// 1) Пошук по квері параметрам, дані беремо з інпута, передаємо в квері і робимо запрос. (Виникла проблема з заданням умови на getAll(url). Що я хотів зробити. Створюємо searchUrl (useState) - - і якщо !query відсутнє то робимо запит просто на url - якшо ж query є то сетаєм `${url}?name=${query}, виникає конфлікт з сепаратором і стається перша сторінка в сетПейдж`).
// 2) Створив контрольовану компоненту Form з трьома інпутами. Яка фільтрує мій масив персонажів. Але вона бере тільки персонажів на одній сторінці. Тому єдиним рішенням це буде пошук персонажів через queryParams.

        const [characters, setCharacters] = useState([]);
        const [charactersPageInfo, setCharactersPageInfo] = useState([]);
        const [url, setUrl] = useState(baseURL + urls.characters);
        const [page, setPage] = useState(1);
        // 1) const [query, setQuery] = useState('');
        const [filteredCharacters, setFilteredCharacters] = useState([]);

        useEffect(() => {

            characterService.getAll(url
                // 1) `${url}?name=${query}`
            ).then(value => {
                setCharacters(value.results)
                setCharactersPageInfo(value.info)
                setFilteredCharacters(value.results)

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

        const getFilter = (data) => {
            let filterArr = [...characters]

            if (data.name){
                filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
            }
            if (data.status){
                filterArr = filterArr.filter(user => user.status.toLowerCase().includes(data.status.toLowerCase()))
            }
            if (data.species){
                filterArr = filterArr.filter(user => user.species.toLowerCase().includes(data.species.toLowerCase()))
            }
            setFilteredCharacters(filterArr)
        }

        return (
            <div>
                {/*1) <div className={"search"}>*/}
                {/*<input type="text" placeholder={"Search Character"} className={"input"} onChange={event => setQuery(event.target.value)} value={query}/></div>*/}
                <div>
                    <Form getFilter={getFilter}/>
                </div>
                <div className='charactersPage'>
                    {filteredCharacters && filteredCharacters.map(character => <Characters key={character.id} character={character}/>)}
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