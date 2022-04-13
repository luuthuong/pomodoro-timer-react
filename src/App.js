import React from "react";

import Bubble from './components/bubble/Bubble';

import Layout from "./layout/Layout";
import NavMobile from './components/navigation/NavMobile';

function App() {

	return (
		<div className="App">
			<Bubble />
			<Layout/>
		</div>
	);
}

export default App;
