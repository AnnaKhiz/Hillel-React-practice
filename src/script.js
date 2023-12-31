import './sass/style.sass';
import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import store from "./store";
import {Provider, useSelector, useDispatch} from 'react-redux';
import {MainContainer} from "./components/MainContainer.jsx";
import {LoginForm} from "./components/LoginForm.jsx";
import { backToPortfolio } from "./js/back.js";
import {getFetchUserList} from './actions';

const App = () => {
	const dispatch = useDispatch();
	const pageCount = useSelector(state => state.calculationReducer.count);

	useEffect(backToPortfolio, []);

	useEffect(() => {
		dispatch(getFetchUserList(pageCount))
	}, [pageCount]);

	return (
		<>
			<div className="button-back" id="button-back"></div>
			<h1 className={"header"}>User list</h1>
			{localStorage.getItem('token') ?
				<MainContainer /> :
				<LoginForm/>
			}
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);

