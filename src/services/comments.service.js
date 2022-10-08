import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentsService ={
    getById: (id)=> axiosService.get(`${urls.comments}?postId=${id}`).then(value => value.data)
}