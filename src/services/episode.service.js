import {axiosService} from "./axios.service";

export const episodeService = {
    getAll: (url) => axiosService.get(url).then(value => value.data),
    getById: (url) => axiosService.get(url).then(value => value.data)
}