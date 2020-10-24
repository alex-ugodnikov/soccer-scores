import React, { Component } from 'react';
import List from './components/List';
import Navbar from './components/Navbar';
import Match from './components/Match';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.css';

// API will be used: https://www.scorebat.com/video-api/

class App extends Component {
	state = {
		matchesFromAPI: [],
		loading: true
	};

	componentDidMount() {
		axios
			.get('https://www.scorebat.com/video-api/v1/')
			.then(result => {
				const matchesFromAPI = result.data;
				this.setState({ matchesFromAPI });
			})
			.then(() => this.setState({ loading: false }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<Router>
					{this.state.loading ? (
						'Loading...'
					) : (
						<Switch>
							{/* <Route path="/" exact component={List} matchesFromAPI={this.state.matchesFromAPI} /> */}
							<Route
								path="/"
								exact
								component={() => <List matchesFromAPI={this.state.matchesFromAPI} />}
							/>
							<Route
								path="/match/:id"
								component={props => <Match {...props} matchesFromAPI={this.state.matchesFromAPI} />}
							/>
						</Switch>
					)}
				</Router>
			</div>
		);
	}
}

export default App;
