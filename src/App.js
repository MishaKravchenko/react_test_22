import './App.css';
import Users from "./User/Users";
import Posts from "./Post/Posts";
import Comments from "./Comment/Comments";

function App() {
    return (
        <div className={"container_main"}>
            <div className={"container_upper"}>
                <div className={"container_users"}><Users/></div>
                <div className={"container_posts"}><Posts/></div>

            </div>
            <div className={"container_down"}>
                <Comments/>
            </div>

        </div>
    );
}

export default App;