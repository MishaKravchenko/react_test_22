import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {LocationService} from "../../services/location.service";
import baseURL, {urls} from "../../configs/urls";
import Locations from "../../components/Locations/Locations";

const LocationPage = () => {

    const [locations, setLocations] = useState([]);
    const [locationsPageInfo, setLocationsPageInfo] = useState([]);
    const [url, setUrl] = useState(baseURL + urls.locations);
    const [page, setPage] = useState(1);


    useEffect(() => {
        LocationService.getAll(url).then(value => {
            setLocations(value.results)
            setLocationsPageInfo(value.info)

            if (url.indexOf("=") >= 0)
                setPage(url.split("=").pop());
            else
                setPage(1);

        })
    }, [url, page]);

    const nextPage = () => {
        if (locationsPageInfo.next)
            setUrl(locationsPageInfo.next)
        else if (locationsPageInfo.next === null)
            setUrl(baseURL + urls.locations)
    }

    const prevPage = () => {
        if (locationsPageInfo.prev)
            setUrl(locationsPageInfo.prev)
        else if (locationsPageInfo.prev === null)
            setUrl(`${baseURL}${urls.locations}?page=${locationsPageInfo.pages}`)
    }

    return (
        <div>
            <div>
                {locations.map(location => <Locations key={location.id} location={location}/>)}
            </div>
            <div>
                <button onClick={prevPage}>Prev</button>
                <span> - - {page} - - </span>
                <button onClick={nextPage}>Prev</button>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {LocationPage};