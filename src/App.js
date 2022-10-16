import {Routes, Route, Navigate} from "react-router-dom";

import {CharactersPage, EpisodeCharactersPage, EpisodesPage, NotFoundPage} from "./pages";
import Layout from "./components/Layout/Layout";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'episodes'}/>}/>
                <Route path={'episodes'} element={<EpisodesPage/>}/>
                <Route path={'episodes/:id/characters'} element={<EpisodeCharactersPage/>}/>
                <Route path={'characters'} element={<CharactersPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
