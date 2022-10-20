import React, {useState} from 'react';

const Form = ({dispatch}) => {

    const [catValue, setCatValue] = useState('');
    const [dogValue, setDogValue] = useState('');

    const submit = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const saveCat = () => {
        dispatch({type: "ADD_CAT", payload: {cat: catValue}})
    }

    const saveDog = () => {
        dispatch({type: "ADD_DOG", payload: {dog: dogValue}})
    }

    return (
        <form onSubmit={submit}>
            <label>Cats: <input type="text" placeholder={"type dog name"}
                                onChange={({target}) => setCatValue(target.value)}/></label>
            <button onClick={saveCat}>Save</button>
            <label>Dogs: <input type="text" placeholder={"type cat name"}
                                onChange={({target}) => setDogValue(target.value)}/></label>
            <button onClick={saveDog}>Save</button>
        </form>
    );
};

export default Form;