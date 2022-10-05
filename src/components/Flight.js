import React from 'react';
import '../App.css'

const Flight = ({flight}) => {
    let {mission_name, launch_year, links} = flight;
    return (
        <div className={"flight"}>
            <h2>{mission_name}</h2>
            <p>{launch_year}</p>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Flight;