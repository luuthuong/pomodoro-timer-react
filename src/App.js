import React from "react";

import {BrowserRouter} from "react-router-dom"


import Bubble from './components/bubble/Bubble';

import Sidebar from "./components/sidebar/Sidebar";

function App() {

	return (
		<div className="App">
			<Bubble size="100"/>
			<BrowserRouter>
			<div className="container">
				<Sidebar/>
			</div>
			</BrowserRouter>
		</div>	
	);
}

export default App;
