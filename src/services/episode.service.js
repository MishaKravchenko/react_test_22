import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const EpisodeService = {
    getAll: () => axiosService.get(urls.episodes).then(value => value.data),
    getById: (url) => axiosService.get(url).then(value => value.data)
}