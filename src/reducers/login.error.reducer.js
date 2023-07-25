import {CONSTANTS} from "../constants.js";

const defaultState = {
    isError: false
}

export const checkError = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.ERROR: {
            state = {
                ...state,
                isError: true
            }
        }
            break;
        case CONSTANTS.NO_ERROR: {
            state = {
                ...state,
                isError: false
            }
        }
    }
    return state;
}