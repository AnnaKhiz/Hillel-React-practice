import React, {Fragment} from 'react';
import {MainContainer} from "./MainContainer.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getLogEmail,
    getLogPassword,
    logInSuccessful} from "../actions";


export const LoginForm = () => {
    const error = 'No such user! Wrong password or email.';
    const dispatch = useDispatch();
    const isError = useSelector(state => state.checkError.isError);
    const logEmail = useSelector(state => state.setLogInData.email);
    const logPassword = useSelector(state => state.setLogInData.password);
    const token = useSelector(state => state.setLogInData.token);


    const onSuccessLogin = (e) => {
        e.preventDefault();
        dispatch(logInSuccessful(logEmail, logPassword));
        }

    return (
        <Fragment>
            {token ? <MainContainer /> :
                <form>
                    <h3>Enter user name:</h3>
                    <input type="text" placeholder="user name" value={logEmail} onChange={(e) => dispatch(getLogEmail(e.target.value))}/>
                    <h3>Enter password:</h3>
                    <input type="password" placeholder="password" value={logPassword} onChange={(e) => dispatch(getLogPassword(e.target.value))}/>
                    <button type="submit" onClick={onSuccessLogin}>Log in</button>
                    {isError && <div className={"error-block"}>{error}</div>}
                </form>
            }
        </Fragment>
    )
}





