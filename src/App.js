import React, { Component } from 'react';
import List from './components/List';
import Navbar from './components/Navbar';
import Match from './components/Match';
import { BrowserRouter as Router, Route, Switch, Link, BrowserHistory } from 'react-router-dom';
import axios from 'axios';

import './App.css';

// API will be used: https://www.scorebat.com/video-api/

class App extends Component {
	state = {
		matchesFromAPI: []
	};

	componentDidMount() {
		axios.get('https://www.scorebat.com/video-api/v1/').then(result => {
			const matchesFromAPI = result.data;
			this.setState({ matchesFromAPI });
		});
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<Router>
					<Switch>
						{/* <Route path="/" exact component={List} matchesFromAPI={this.state.matchesFromAPI} /> */}
						<Route path="/" exact component={() => <List matchesFromAPI={this.state.matchesFromAPI} />} />
						<Route path="/match/:id" component={() => <Match matchesFromAPI={this.state.matchesFromAPI} />} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
