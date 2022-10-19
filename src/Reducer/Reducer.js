import {DECREMENT, INCREMENT} from "../Boilerplate/Boilerplate";

export const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {counter: state.counter + action.payload}
        case DECREMENT:
            return {counter: state.counter - action.payload}
        default:
            console.error("Unknown type")
    }
}