import {Routes, Route, Navigate} from "react-router-dom";

import {CharactersPage, EpisodesPage, NotFoundPage} from "./pages";
import Layout from "./components/Layout/Layout";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'episodes'}/>}/>
                <Route path={'episodes'} element={<EpisodesPage/>}/>
                <Route path={'episodes/:id/characters'} element={<CharactersPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
