import React from 'react';
import {
    setFormDisabled,
    getUserLastNameForEdit,
    getUserEmailForEdit,
    getUserAvatarForEdit,
    getUserFirstNameForEdit,
    clearAddNewUserForm,
    addNewUser
} from '../actions';
import {useDispatch, useSelector} from "react-redux";

export const FormComponent = ({}) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.setUserListReducer.userList);
    const first_name = useSelector(state => state.setUserListReducer.first_name);
    const last_name = useSelector(state => state.setUserListReducer.last_name);
    const avatar = useSelector(state => state.setUserListReducer.avatar);
    const email = useSelector(state => state.setUserListReducer.email);

    const onSendData = (e) => {
        e.preventDefault();
       dispatch(addNewUser({
            first_name: first_name,
            last_name: last_name,
            email: email,
            avatar: avatar
       }));
        dispatch(setFormDisabled())
        dispatch(clearAddNewUserForm(users))
    }

        return (
            <form className={"form-add-user"} >
                <h3>First name:</h3>
                <input className={"input-first-name"} type="text" placeholder="First name" value={first_name} onChange={(e) => dispatch(getUserFirstNameForEdit(e.target.value))} />
                <h3>Last name:</h3>
                <input className={"input-last-name"} type="text" placeholder="Last name" value={last_name} onChange={(e) => dispatch(getUserLastNameForEdit(e.target.value))}/>
                <h3>Email:</h3>
                <input className={"input-email"} type="text" placeholder="Email" value={email} onChange={(e) => dispatch(getUserEmailForEdit(e.target.value))} />
                <h3>Avatar:</h3>
                <input className={"input-avatar"} type="text" placeholder="Avatar" value={avatar} onChange={(e) => dispatch(getUserAvatarForEdit(e.target.value))}/>
                <button type="submit" className={"button-send"} onClick={onSendData} >Add user</button>
            </form>
        )
}