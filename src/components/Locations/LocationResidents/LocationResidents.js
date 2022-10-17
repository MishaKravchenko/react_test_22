import React, {useEffect, useState} from 'react';
import {LocationService} from "../../../services/location.service";
import LocationResident from "../LocationResident/LocationResident";

const LocationResidents = ({url}) => {

    const [resident, setResident] = useState([]);

    useEffect(()=> {
        LocationService.getById(url).then(value => setResident(value))
    }, [url]);

    return (
        <div>
            <LocationResident resident={resident}/>
        </div>
    );
};

export default LocationResidents;