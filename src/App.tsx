import React from "react";
import logo from "./logo.svg";
import Hello from "./components/Hello";
import Hello1 from "./components/Hello1";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Hello name="name值"></Hello>
			<Hello1 name="name值"></Hello1>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit<code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
