import React from 'react';

const Simpson = (props) => {
let {name, surname, url} = props;
    return (
        <div className="App">
            <h1 className="hello">{surname}</h1>
            <div>
                <p>{name} {surname} </p>
                <img src={url} alt={name}/>
            </div>
        </div>
    );
};

export default Simpson;