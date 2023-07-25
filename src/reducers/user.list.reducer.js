import {CONSTANTS} from "../constants.js";

const defaultState = {
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
    userList: []
}

export const setUserListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.GET_USERS: {
            state = {
                ...state,
                userList: action.payload
            }
        }
        break;
        case CONSTANTS.DELETE_USERS: {
            state = {
                ...state,
                userList: action.payload
            }
        }
        break;
        case CONSTANTS.EDIT_USERS: {
            state = {
                ...state,
                userList: [...state.userList, ...action.payload]
            }
        }
        break;
        case CONSTANTS.GET_EMAIL_FOR_EDIT: {
            state = {
                ...state,
                email: action.payload
            }
        }
            break;
        case CONSTANTS.GET_AVATAR_FOR_EDIT: {
            state = {
                ...state,
                avatar: action.payload
            }
        }
            break;
        case CONSTANTS.GET_FIRST_NAME_FOR_EDIT: {
            state = {
                ...state,
                first_name: action.payload
            }
        }
            break;
        case CONSTANTS.GET_LAST_NAME_FOR_EDIT: {
            state = {
                ...state,
                last_name: action.payload
            }
        }
            break;
        case CONSTANTS.ADD_USER: {
            state = {
                ...state,
                userList: [...state.userList, action.payload]
            }
        }
            break;
        case CONSTANTS.CLEAR_ADD_USER_FORM: {
            state = {
                ...state,
                first_name: '',
                last_name: '',
                email: '',
                avatar: '',
                userList: state.userList
            }
        } break;
    }
    return state;
}