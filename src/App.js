import React, {useState} from 'react';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'
import {postsService} from "./services/posts.service";

const App = () => {

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUser = (user) => {
        setUser(user)
        setPosts([])
    }

    const getUserId = (id) => {
        postsService.getById(id).then(value => setPosts([...value]))
    }

    return (
        <div>
            <div className={css.wrap}>
                <div className={css.item1}><Users getUser={getUser}/></div>
                <div className={css.item2}>{user && <UserDetails user={user} getUserId={getUserId}/>}</div>
            </div>
            <div className={css.item3}>
                <Posts posts={posts}/>
            </div>

        </div>
    );
};

export default App;