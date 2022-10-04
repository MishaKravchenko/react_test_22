import React from 'react';
import './Notebook.css';

const Notebook = (props) => {
    let { id, brand, model, cost, url, alt } = props;
    return (
        <div>
            <h1>{id}. Brand: {brand}</h1>
            <p>Model: {model} - {cost}</p>
            <img src={url} alt={alt}/>
        </div>
    );
};

export default Notebook;