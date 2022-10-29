import {axiosServiceURL} from "./axios.service";
import {urls} from "../constants/urls.jsonplaceholder";

export const albumService = {
    getAlbumsById: (id) => axiosServiceURL.get(`${urls.users}/${id}${urls.albums}`).then(value => value.data),
    getPhotoByAlbumsId: (id) => axiosServiceURL.get(`${urls.albums}/${id}${urls.photos}`).then(value => value.data)
}