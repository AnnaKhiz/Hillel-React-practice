import {CONSTANTS} from "../constants.js";

const defaultState = {
    count: 1
}

export const switchPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.NEXT_PAGE: {
            state = {
                ...state,
                count: ++state.count,
            }
        }
            break;
        case CONSTANTS.PREV_PAGE: {
            state = {
                ...state,
                count: --state.count,
            }
        }
            break;

    }
    return state;

}

