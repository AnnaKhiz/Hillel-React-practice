import {CONSTANTS} from "../constants.js";

export const setNextPage = () => (
    {
        type: CONSTANTS.NEXT_PAGE,
        payload: 1,
    }
)

export const setPrevPage = () => (
    {
        type: CONSTANTS.PREV_PAGE,
        payload: 1,
    }
)