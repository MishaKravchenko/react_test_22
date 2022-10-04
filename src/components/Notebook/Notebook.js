import React from 'react';
import './Notebook.css';

const Notebook = ({notebook}) => {
    let {id, brand, model, cost, url, alt} = notebook
    return (
        <div className={"item"}>
            <h1>{id}. Brand: {brand}</h1>
            <p>Model: {model} - {cost}</p>
            <img src={url} alt={alt}/>
        </div>
    );
};

export default Notebook;