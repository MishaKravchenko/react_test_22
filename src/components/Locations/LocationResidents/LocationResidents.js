import React, {useEffect, useState} from 'react';
import {locationService} from "../../../services/location.service";
import LocationResident from "../LocationResident/LocationResident";

const LocationResidents = ({url}) => {

    const [resident, setResident] = useState([]);

    useEffect(()=> {
        locationService.getById(url).then(value => setResident(value))
    }, [url]);

    return (
        <div>
            <LocationResident resident={resident}/>
        </div>
    );
};

export default LocationResidents;