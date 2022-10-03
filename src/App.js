import './App.css';
import Simpson from "./components/Simpson";

function App() {
  return (
    <div className="App">
        <Simpson name={"Bart"} surname={"Simpson"} url={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'} styleClass={"bart"}/>
        <Simpson name={"Homer"} surname={"Simpson"} url={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'} styleClass={"homer"}/>
        <Simpson name={"Lisa"} surname={"Simpson"} url={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'} styleClass={"lisa"}/>
        <Simpson name={"Marge"} surname={"Simpson"} url={'https://i.pinimg.com/474x/65/68/20/6568208d3b0f4a57be5f48f62bae12e3--cartoon-mom-los-simpson.jpg'} styleClass={"marge"}/>
    </div>
  );
}

export default App;
