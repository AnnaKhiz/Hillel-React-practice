import {CONSTANTS} from "../constants.js";

export const getFetchUserList = (pageCount = 1) => async (dispatch) => {

    const response = await fetch(`${CONSTANTS.URL}users?page=${pageCount}`);
    const json = await response.json();
    const result = await json.data;
        dispatch ({
                    type: CONSTANTS.GET_USERS,
                    payload: result
                })
}

export const delUserFetch = (users, checkedElement) => async (dispatch) => {

    const response = await fetch(`${CONSTANTS.URL}users`, {
        method: 'DELETE'
    });

    if (response.status === 204) {
        dispatch ({
            type: CONSTANTS.DELETE_USERS,
            payload: users.filter((el, i) => i != checkedElement)
        })
    }
}

export const editUserFetch = (users, checkedElement, first_name, last_name, email, avatar) => async (dispatch) => {

    const response = await fetch(`${CONSTANTS.URL}users/2`, {
        method: 'PATCH',
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            avatar: avatar,
        })
    })

    if (response.status === 200) {

        dispatch ({
            type: CONSTANTS.EDIT_USERS,
            payload: users.filter((elem, i) => {
                if (i == checkedElement) {
                    elem.first_name = first_name
                    elem.last_name = last_name
                    elem.email = email
                    elem.avatar = avatar
                }
            })
        })
    }
}

export const getUserEmailForEdit = (email) => (
    {
        type: CONSTANTS.GET_EMAIL_FOR_EDIT,
        payload: email
    }
)

export const getUserAvatarForEdit = (avatar) => (
    {
        type: CONSTANTS.GET_AVATAR_FOR_EDIT,
        payload: avatar
    }
)
export const getUserFirstNameForEdit = (first_name) => (
    {
        type: CONSTANTS.GET_FIRST_NAME_FOR_EDIT,
        payload: first_name
    }
)
export const getUserLastNameForEdit = (last_name) => (
    {
        type: CONSTANTS.GET_LAST_NAME_FOR_EDIT,
        payload: last_name
    }
)
export const addNewUser = (user) => (
    {
        type: CONSTANTS.ADD_USER,
        payload: user
    }
)

export const clearAddNewUserForm = (user) => (
    {
        type: CONSTANTS.CLEAR_ADD_USER_FORM,
        payload: user
    }
)
