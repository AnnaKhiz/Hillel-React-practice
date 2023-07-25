import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setNextPage, setPrevPage, setFormEnabled} from '../actions';
import {FormComponent} from "./FormComponent.jsx";
import {ListElement} from "./ListElement.jsx";


export const MainContainer = () => {
    const dispatch = useDispatch()
    const isEnabled = useSelector(state => state.switchForm.isFormEnabled);
    const pageCount = useSelector(state => state.calculationReducer.count);

    const onNextPage = () => {
        dispatch(setNextPage())
        if (pageCount >= 2) {
            dispatch(setPrevPage())
        }
    }

    const onPrevPage = () => {
        dispatch(setPrevPage())
        if (pageCount <= 1) {
            dispatch(setNextPage())
        }
    }

    return (
        <Fragment>
            <button onClick={onNextPage}>Next page</button>
            <button onClick={() => dispatch(setFormEnabled())} className={"add-user-button"}>Add new user</button>
            <button onClick={onPrevPage}>Prev page</button>
            {isEnabled && <FormComponent/>}
            <ListElement />
        </Fragment>
    )

}

