import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom'; 
import './App.css';
import Job from './pages/Job.js';
import Search from './pages/Search.js';
import Mine from './pages/Mine.js';
class App extends Component {
    constructor(){
    super();
   } 
  render() {
    return (
      <div className="Appbox">
        <Router>
          <div className="App">
            <header className="headerNav">
              <p>拉勾网</p>
            </header>
            <Switch>
              <Route path="/job" component={Job}></Route>
              <Route path="/search" component={Search}></Route>
              <Route path="/mine" component={Mine}></Route>
              <Route path="/" component={Job}></Route>
            </Switch>
            <footer className="footerNav">
              <ul>
                <li><NavLink to="/job">职位</NavLink></li>
                <li><NavLink to="/search">搜索</NavLink></li>
                <li><NavLink to="/mine">我的</NavLink></li>
              </ul>
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
