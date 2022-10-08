import React, {useState} from 'react';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'

const App = () => {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)
    }

    const getUserId = (id) => {
        setUserId(id)
    }

    return (
        <div>
            <div className={css.wrap}>
                <div className={css.item1}><Users getUser={getUser}/></div>
                <div className={css.item2}>{user && <UserDetails user={user} getUserId={getUserId}/>}</div>
            </div>
            <div className={css.item3}>
                <Posts userId={userId}/>
            </div>

        </div>
    );
};

export default App;