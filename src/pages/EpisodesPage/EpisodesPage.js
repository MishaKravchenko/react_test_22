import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import Episodes from "../../components/Episodes/Episodes";
import baseURL, {urls} from "../../configs/urls";
import "./EpisodePage.css"

const EpisodesPage = () => {

    const [episodes, setEpisodes] = useState([]);
    const [episodesPageInfo, setEpisodesPageInfo] = useState({});
    let [url, setUrl] = useState(baseURL + urls.episodes);
    let [page, setPage] = useState(1);

    useEffect(() => {
        episodeService.getAll(url).then(value => {
            setEpisodes(value.results)
            setEpisodesPageInfo(value.info);

            if (url.indexOf("=") >= 0)
                setPage(url.split("=").pop());
            else
                setPage(1);

        });
    }, [url, page]);

    const nextPage = () => {
        if (episodesPageInfo.next)
            setUrl(episodesPageInfo.next);
        else if (episodesPageInfo.next === null)
            setUrl(baseURL + urls.episodes);
    };

    const prevPage = () => {
        if (episodesPageInfo.prev)
            setUrl(episodesPageInfo.prev);
        else if (episodesPageInfo.prev === null)
            setUrl(`${baseURL}${urls.episodes}?page=${episodesPageInfo.pages}`)
    };

    return (
        <div>
            <div className='episodesPage'>
                {episodes.map(episode => <Episodes key={episode.id} episode={episode}/>)}
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