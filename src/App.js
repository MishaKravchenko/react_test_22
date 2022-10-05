import './App.css';
import Test from "./components/Test";

function App() {
   const user = { name: "Vasia", age: 12}
    return (
        <div>
        <Test>
            ChildrenText,
            {user};
        </Test>
        </div>
    );
}

export default App;
