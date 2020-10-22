import React from 'react';
import List from './components/List';
import Navbar from './components/Navbar';
import Match from './components/Match';
import { BrowserRouter as Router, Route, Switch, Link, BrowserHistory } from 'react-router-dom';

import './App.css';

// API will be used: https://www.scorebat.com/video-api/

function App() {
	return (
			<div className="App">
				<Navbar />
       <Router>
       <Switch>
        <Route path = "/" exact component = {List}></Route>
        <Route path = "/match/:id" component = {Match}></Route>
        </Switch>
      </Router>
			</div>
	);
}

export default App;
