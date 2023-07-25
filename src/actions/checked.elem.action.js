import {CONSTANTS} from "../constants.js";

export const getElementId = (number) => (
    {
        type: CONSTANTS.GET_CHECKED_ID,
        payload: number,
    }
)