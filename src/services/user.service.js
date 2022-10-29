import {axiosServiceURL} from "./axios.service";
import {urls} from "../constants/urls.jsonplaceholder";

export const userService = {
    getAll: () => axiosServiceURL.get(urls.users).then(value => value.data),
    getById: (id) => axiosServiceURL.get(`${urls.users}/${id}`).then(value => value.data),
    getPosts: (id) => axiosServiceURL.get(`${urls.users}/${id}/posts`).then(value => value.data)
}