import {CONSTANTS} from "../constants.js";

const defaultState = {
    isFormEnabled: false
}

export const switchForm = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.ENABLED: {
            state = {
                ...state,
                isFormEnabled: !state.isFormEnabled
            }
        }
        break;
        case CONSTANTS.DISABLED: {
            state = {
                ...state,
                isFormEnabled: false
            }
        }
    }
    return state;
}