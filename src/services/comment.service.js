import {axiosServiceURL} from "./axios.service";
import {urls} from "../constants/urls.jsonplaceholder";

export const commentService = {
    getAll: () => axiosServiceURL.get(urls.comments).then(value => value.data),
    getById: (id) => axiosServiceURL.get(`${urls.comments}/${id}`).then(value => value.data)
}