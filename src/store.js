import React from "react";
import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';

import {switchPageReducer,
    switchForm,
    switchEditForm,
    checkError,
    setLogInData,
    setUserListReducer,
    getCheckedElement} from "./reducers";

const rootReducer = combineReducers({
    calculationReducer: switchPageReducer,
    switchForm,
    switchEditForm,
    checkError,
    setLogInData,
    setUserListReducer,
    getCheckedElement
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));





