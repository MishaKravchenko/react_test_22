import {axiosService} from "./axios.service";

export const LocationService = {
    getAll: (url) => axiosService.get(url).then(value => value.data)
}