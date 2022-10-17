import React from 'react';
import {Link} from "react-router-dom";

const Locations = ({location: {id, name, type, dimension}}) => {
    return (
        <div>
            {id}) {name}, {type}, {dimension}.
            <Link to='residents'>
                <button>Residents</button>
            </Link>
        </div>
    );
};

export default Locations;