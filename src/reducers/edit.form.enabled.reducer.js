import {CONSTANTS} from "../constants.js";

const defaultState = {
    isEditFormEnabled: false
}

export const switchEditForm = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.EDIT_ENABLED: {
            state = {
                ...state,
                isEditFormEnabled: true
            }
        }
            break;
        case CONSTANTS.EDIT_DISABLED: {
            state = {
                ...state,
                isEditFormEnabled: false
            }
        }
    }
    return state;
}