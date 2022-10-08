import React, {useState} from 'react';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'
import Comments from "./components/Comments/Comments";

const App = () => {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [postId, setPostId] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)
        setPostId(null)
    }

    const getUserId = (id) => {
        setUserId(id)
    }

    const getPostId = (id) => {
        setPostId(id)
    }

    return (
        <div>
            <div className={css.wrap1}>
                <div className={css.item1}><Users getUser={getUser}/></div>
                <div className={css.item2}>{user && <UserDetails user={user} getUserId={getUserId}/>}</div>
            </div>
            <div className={css.wrap2}>
                <Posts userId={userId} getPostId={getPostId}/>
                <Comments postId={postId}/>
            </div>

        </div>
    );
};

export default App;