import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const CommentService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.comments}/${id}`).then(value => value.data)
}