import React, { useState, useEffect } from "react";

import Bubble from './components/bubble/Bubble';

import Layout from "./layout/Layout";

import handleFirebase from './firebase/index';

import { useDispatch, useSelector } from 'react-redux'

import handleAction from './redux/action';

import { todoListSelector } from './redux/selector'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		handleFirebase.getData('todolist').then(data => data.forEach((doc, item) => {
			dispatch(handleAction('TODO/AddTodo',
				{
					id: doc.id,
					data: doc.data()
				}))
		}))
	}, [])

	return (
		<div className="App">
			<Bubble />
			<Layout />
		</div>
	);
}

export default App;
