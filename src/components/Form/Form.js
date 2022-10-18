import React, {useState} from 'react';

const Form = ({getFilter}) => {

    const [form, setForm] = useState({name:'', status:'', species:''});

    const formHandler = (e) => {
      e.preventDefault();
      const eventData = ({...form, [e.target.name]: e.target.value})
        setForm({...eventData})
        getFilter(eventData);
    }

    return (
        <div>
            <form>
                <label>Name: <input type="text" name={"name"} onChange={formHandler}/></label>
                <label>Status: <input type="text" name={"status"} onChange={formHandler}/></label>
                <label>Species: <input type="text" name={"species"} onChange={formHandler}/></label>
            </form>
        </div>
    );
};

export default Form;