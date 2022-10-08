import React, {useState} from 'react';

const Form = ({getFilter}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});

    const submit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    const formHandler = (e) => {
        const eventData = ({...form, [e.target.name]: e.target.value});
        setForm({...form, ...eventData})
        getFilter(eventData);
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label>Name: <input type="text" name={"name"} onChange={formHandler}/></label>
                <label>Username: <input type="text" name={"username"} onChange={formHandler}/></label>
                <label>Email: <input type="text" name={"email"} onChange={formHandler}/></label>
                <button>Find</button>
            </form>
        </div>
    );
};

export default Form;