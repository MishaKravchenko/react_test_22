import {axiosServiceURL} from "./axios.service";
import {urls} from "../constants/urls.jsonplaceholder";

export const postService ={
    getAll: () => axiosServiceURL.get(urls.posts).then(value => value.data),
    getById: (id) => axiosServiceURL.get(`${urls.posts}/${id}`).then(value => value.data),
    getComments: (id) => axiosServiceURL.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}