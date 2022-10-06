import React, {useState} from 'react';

const App = () => {

    const [form, setForm] = useState({name: '', age: 0});

    const submit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    const formHandle = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>Name: <input type="text" name={"name"} onChange={formHandle}/></label>
                    <label>Age: <input type="number" name={"age"} onChange={formHandle}/></label>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default App;