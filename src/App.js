import {Routes, Route, Navigate} from "react-router-dom";

import {
    CharacterEpisodesPage,
    CharactersPage,
    EpisodeCharactersPage,
    EpisodesPage,
    LocationPage,
    NotFoundPage
} from "./pages";
import Layout from "./components/Layout/Layout";
import './App.css';
import LocationResidentsPage from "./pages/LocationPage/LocationResidentsPage/LocationResidentsPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'episodes'}/>}/>
                <Route path={'episodes'} element={<EpisodesPage/>}/>
                <Route path={'episodes/:id/characters'} element={<EpisodeCharactersPage/>}/>
                <Route path={'characters'} element={<CharactersPage/>}/>
                <Route path={'characters/:id/episodes'} element={<CharacterEpisodesPage/>}/>
                <Route path={'locations'} element={<LocationPage/>}>
                    <Route path={':id/residents'} element={<LocationResidentsPage/>}/>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
