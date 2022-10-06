import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(urls.users)
        .then(value => value.json())
}

const getUserById = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(value => value.json())
}

export const userService = {
    getAll,
    getUserById
}