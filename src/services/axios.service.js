import axios from "axios";
import baseURL from "../constants/urls.jsonplaceholder";
import baseAPI from "../constants/urls.api";

export const axiosServiceURL = axios.create({
    baseURL: baseURL
});

export const axiosServiceAPI = axios.create({
    baseURL: baseAPI
});
