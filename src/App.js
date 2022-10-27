import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import UserDetailsPage from "./pages/UsersPage/UserDetailsPage/UserDetailsPage";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={"users"} element={<UsersPage/>}>
                    <Route path={":id"} element={<UserDetailsPage/>}/>
                </Route>
                <Route path={"posts"} element={<PostsPage/>}/>
                <Route path={"comments"} element={<CommentsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
