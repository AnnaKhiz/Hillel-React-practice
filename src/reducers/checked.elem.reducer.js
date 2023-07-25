import {CONSTANTS} from "../constants.js";

const defaultState = {
    id_element: ''
}

export const getCheckedElement = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.GET_CHECKED_ID: {
            state = {
                ...state,
                id_element: action.payload
            }
        }
    }
    return state;
}