import React, {Fragment} from 'react';
import imgEdit from '../img/free-icon-font-edit-3917361.png';
import imgDel from '../img/free-icon-font-trash-3917242.png';
import {useDispatch, useSelector} from "react-redux";
import {UserEditForm} from "./UserEditForm.jsx";
import {delUserFetch,
    setEditFormEnabled,
    getUserEmailForEdit,
    getUserAvatarForEdit,
    getUserFirstNameForEdit,
    getUserLastNameForEdit,
    getElementId} from '../actions';

export const ListElement = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.setUserListReducer.userList);
    const isEnabled = useSelector(state => state.switchEditForm.isEditFormEnabled)


    const onEdit = (e) => {
        dispatch(setEditFormEnabled())
        dispatch(getUserFirstNameForEdit(e.target.parentElement.children[1].children[3].innerText))
        dispatch(getUserLastNameForEdit(e.target.parentElement.children[1].children[5].innerText))
        dispatch(getUserEmailForEdit(e.target.parentElement.children[1].children[1].innerText))
        dispatch(getUserAvatarForEdit(e.target.parentElement.children[0].children[0].src))
        dispatch(getElementId(e.target.parentElement.id))
    }

    return (
            <Fragment>

                {isEnabled && <UserEditForm />}

                <div className={"container"} >
                    {users.map((element, index) => (
                        <div className={"user-card-component"} key={`${element.first_name}-${Date.now()}`} id={index}>
                            <div className={"image-block"}>
                                <img src={element.avatar}/>
                            </div>
                            <div className={"card-content"}>
                                <h3>Email:</h3>
                                <p className="user-email">{element.email}</p>
                                <h3>First name:</h3>
                                <p className="user-first-name">{element.first_name}</p>
                                <h3>Last name:</h3>
                                <p className="user-last-name">{element.last_name}</p>
                            </div>
                            <img src={imgEdit} className="edit-button" id={`edit-${index}`} onClick={onEdit}/>
                            <img src={imgDel} className="delete-button" id={`delete-${index}`} onClick={(e) => dispatch(delUserFetch(users, e.target.parentElement.id))}/>
                        </div>
                    ))
                    }
                </div>

            </Fragment>

)}