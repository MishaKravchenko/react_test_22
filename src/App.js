import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import './App.css';
import {
    CommentDetailsPage,
    CommentsPage,
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserAlbumPhotosPage,
    UserAlbumsPage,
    UserDetailsPage,
    UserPostsPage,
    UsersPage
} from "./pages";
import CarsPage from "./pages/CarsPage/CarsPage";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
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
                <Route path={"comments"} element={<CommentsPage/>}>
                    <Route path={":id"} element={<CommentDetailsPage/>}/>
                </Route>
                <Route path={"cars"} element={<CarsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
