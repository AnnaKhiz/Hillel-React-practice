import {CONSTANTS} from "../constants.js";

const defaultState = {
    email: 'eve.holt@reqres.in',
    password: 'dfsdfsd',
    token: ''
}

export const setLogInData = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.LOG_EMAIL: {
            state = {
                ...state,
                email: action.email,
            }
        }
            break;
        case CONSTANTS.LOG_PAS: {
            state = {
                ...state,
                password: action.password
            }
        }
            break;
        case CONSTANTS.LOG_TOKEN: {
            state = {
                ...state,
                token: action.token
            }
        }
            break;
        case CONSTANTS.LOG_IN: {
            state = {
                ...state,
                token: action.payload
            }
        }
            break;
    }
    return state;
}