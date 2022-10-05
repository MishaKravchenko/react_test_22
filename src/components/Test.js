import React from 'react';

const Test = (props) => {
    const children = props.children
    return (
        <div>
            Hello {children[0]} {children[1].name}
            <h2>{children[1].age}</h2>
            <h3>{children[1].name}</h3>
        </div>
    );
};

export default Test;