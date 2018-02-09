import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom'; 
import Login from './pages/Login.js';
import Regist from './pages/regist.js' ;
import Detail from './pages/detail.js'
import App from "./App.js"
class AppOther extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<Router>
					<div>
						<Switch>
							<Route path="/detail" component={Detail}></Route>
							<Route path="/regist" component={Regist}></Route>
							<Route exact path="/login" component={Login}></Route>
							<Route path="/" component={App}></Route>
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

export default AppOther;