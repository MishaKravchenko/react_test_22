import React, {useEffect, useState} from 'react';

import {EpisodeService} from "../../services/episode.service";
import Episodes from "../../components/Episodes/Episodes";
import baseURL, {urls} from "../../configs/urls";
import "./EpisodePage.css"

const EpisodesPage = () => {

    const [episodes, setEpisodes] = useState([]);
    const [episodesPageInfo, setEpisodesPageInfo] = useState({});
    let [page, setPage] = useState(1);
    let [num, setNum] = useState(baseURL + urls.episodes);

    useEffect(() => {
        EpisodeService.getAll(num).then(value => {
            setEpisodes(value.results)
            setEpisodesPageInfo(value.info);

            if (num.indexOf("=") >= 0)
                setPage(num.split("=").pop());
            else
                setPage(1);

        });
    }, [num, page]);

    const nextPage = () => {
        if (episodesPageInfo.next)
            setNum(episodesPageInfo.next);
        else if (episodesPageInfo.next === null)
            setNum(baseURL + urls.episodes);
    };

    const prevPage = () => {
        if (episodesPageInfo.prev)
            setNum(episodesPageInfo.prev);
        else if (episodesPageInfo.prev === null)
            setNum(`${baseURL}${urls.episodes}?page=${episodesPageInfo.pages}`)
    };

    return (
        <div>
            <div className='episodesPage'>
                {episodes.map(episode =>
                    <Episodes key={episode.id} episode={episode}/>)}
            </div>
            <div className='buttons'>
                <button onClick={prevPage}>prev</button>
                <span> --- [{page}] --- </span>
                <button onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {EpisodesPage};