import {axiosServiceAPI} from "./axios.service";
import {urls} from "../constants/urls.api";

export const carService = {
    getAll: () => axiosServiceAPI.get(urls.cars).then(value => value.data),
    create: (car) => axiosServiceAPI.post(urls.cars, car).then(value => value.data),
    deleteById: (id) => axiosServiceAPI.delete(`${urls.cars}/${id}`),
    updateById: (car, id) => axiosServiceAPI.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}