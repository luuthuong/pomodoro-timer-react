import React, { useState, useEffect } from "react";

import Bubble from './components/bubble/Bubble';

import Layout from "./layout/Layout";

import handleFirebase from './firebase/index';

function App() {
	const [state, setState] = useState([])
	useEffect(() => {
		handleFirebase.getData('todolist').then(data => data.forEach((doc, item) => setState((prevState) => [...prevState, {
				id: doc.id,
				data: doc.data()}])))
		}, [])
	console.log(state);
	return (
		<div className="App">
			<Bubble />
			<Layout />
		</div>
	);
}

export default App;
