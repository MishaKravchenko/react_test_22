import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const UserService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data)
}