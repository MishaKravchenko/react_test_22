import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPosts: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}