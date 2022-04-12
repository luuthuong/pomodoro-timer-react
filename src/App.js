import React from "react";

import {BrowserRouter} from "react-router-dom"

import Bubble from './components/bubble/Bubble';

import Sidebar from "./components/sidebar/Sidebar";

import MyRouter from "./router/MyRouter";

import MyCard from './components/card/MyCard';

import Footer from "./components/footer/Footer";

function App() {

	return (
		<div className="App">
			<Bubble />
			<BrowserRouter>
				<div className="container">
					<Sidebar />
					<div className="relative ml-[20px] w-full h-full   container__content">
					<div className="container__break w-full h-[75%] flex items-center   ">
						<MyRouter />
						<div className="right h-full w-[300px] flex flex-col items-center justify-between ">
							<MyCard data={[{title:'task'}]} placeholder="Choose task">
							</MyCard>
							<MyCard data={[{title:'music'}]} placeholder="Choose music">
							</MyCard>
						</div>
					</div>
					<div className="container__break absolute bottom-0 w-full h-[144px] mt-[20px]">
						<Footer/>
					</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
