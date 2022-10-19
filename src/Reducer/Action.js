import {DECREMENT, INCREMENT} from "../Boilerplate/Boilerplate";

// const increment = (payload) => ({
//     type: INCREMENT,
//     payload
// })
// const decrement = (payload) => ({
//     type: DECREMENT,
//     payload
// })

export const increment = (payload) => {
    return {
        type: INCREMENT,
        payload
    };
};
export const decrement = (payload) => {
    return {
        type: DECREMENT,
        payload
    };
};