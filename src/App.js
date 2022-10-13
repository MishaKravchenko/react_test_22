import {Routes, Route} from "react-router-dom";

import {HomePage, PostCommentsPage, PostDetailsPage, PostsPage, UserAlbumPhotosPage, UserAlbumsPage, UserDetailsPage, UserPostsPage, UsersPage} from "./pages";
import Layout from "./components/Layout/Layout";
import './App.css';


function App() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"home"} element={<HomePage/>}/>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={":id"} element={<UserDetailsPage/>}>
                            <Route path={"posts"} element={<UserPostsPage/>}/>
                        </Route>
                        <Route path={":id/albums"} element={<UserAlbumsPage/>}>
                            <Route path={":albumId/photos"} element={<UserAlbumPhotosPage/>}/>
                        </Route>
                    </Route>
                    <Route path={"posts"} element={<PostsPage/>}>
                        <Route path={":id"} element={<PostDetailsPage/>}>
                            <Route path={"comments"} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
