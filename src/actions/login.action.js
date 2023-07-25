import {CONSTANTS} from "../constants.js";
import {setError} from "./login.error.action";

export const getLogEmail = (email) => (
    {
        type: CONSTANTS.LOG_EMAIL,
        email: email,
    }
)

export const getLogPassword = (password) => (
    {
        type: CONSTANTS.LOG_PAS,
        password: password
    }
)

export const getLogToken = (token) => (
    {
        type: CONSTANTS.LOG_TOKEN,
        password: token
    }
)

export const logInSuccessful = (logEmail, logPassword) => async (dispatch) => {

    const response = await fetch(`${CONSTANTS.URL}login`, {
        method: 'POST',
        body: JSON.stringify({
            email: logEmail,
            password: logPassword
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        const json = await response.json();
        const token = json.token;
        if (token) {
            localStorage.setItem('token', token);
            dispatch ({
                type: CONSTANTS.LOG_IN,
                payload: token
            })
        } else {
            dispatch(setError());
        }
}