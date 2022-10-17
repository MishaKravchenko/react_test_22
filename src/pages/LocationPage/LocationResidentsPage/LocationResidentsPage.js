import React from 'react';
import {useLocation} from "react-router-dom";

import LocationResidents from "../../../components/Locations/LocationResidents/LocationResidents";

const LocationResidentsPage = () => {

    const {state} = useLocation();

    return (
        <div className={'locationResidentsPage'}>
            {state.map(url => <LocationResidents key={url.split('/').pop()} url={url}/>)}
        </div>
    );
};

export default LocationResidentsPage;