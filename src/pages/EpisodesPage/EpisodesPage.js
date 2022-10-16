import React, {useEffect, useState} from 'react';

import {EpisodeService} from "../../services/episode.service";
import Episodes from "../../components/Episodes/Episodes";

const EpisodesPage = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        EpisodeService.getAll().then(value => setEpisodes(value.results));
    }, []);

    return (
        <div>
            {episodes.map(episode => <Episodes key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {EpisodesPage};