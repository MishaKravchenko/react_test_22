import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


export const albumService = {
    getAlbumsById: (id) => axiosService.get(`${urls.users}/${id}${urls.albums}`).then(value => value.data),
    getPhotoByAlbumsId: (id) => axiosService.get(`${urls.albums}/${id}${urls.photos}`).then(value => value.data)
}