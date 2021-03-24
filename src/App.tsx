import React from "react";
import { Switch,Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Dashboard from "./container/dashboard";
import Hello from "./components/Hello";
import Hello1 from "./components/Hello1";
import "./App.css";

function App() {
	return (
		<div className="App">
			{/* <Hello name="name值"></Hello>
			<Hello1 name="name值"></Hello1> */}
			<ul className="link-ul">
				<li><Link to="/dashboard">首页</Link></li>
				<li><Link to="/hello">hello路由</Link></li>
				<li><Link to="/hello1">hello1路由</Link></li>
			</ul>
			<Switch>
				<Route path="/dashboard" component={Dashboard}></Route>
				<Route path="/hello" component={Hello}></Route>
				<Route path="/hello1" component={Hello1}></Route>
			</Switch>

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
