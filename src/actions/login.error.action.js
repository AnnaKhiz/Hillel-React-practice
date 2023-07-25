import {CONSTANTS} from "../constants.js";

export const setError = () => (
    {
        type: CONSTANTS.ERROR
    }
)

export const setNoError = () => (
    {
        type: CONSTANTS.NO_ERROR
    }
)