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
		loading: true,
		currentDate: new Date()
	};

	componentDidMount() {
		axios
			.get('https://www.scorebat.com/video-api/v1/')
			.then(result => {
				const matchesFromAPI = result.data;
				matchesFromAPI.map((match, index) => {
					return match.id = index;
				})


				this.setState({ matchesFromAPI });
			})
			.then(() => this.setState({ loading: false }))
			.catch(err => console.log(err));
	}

	setDate = (currentDate) => {
		this.setState({ currentDate })
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
									render={(props) => <List {...props} setDate={this.setDate} currentDate={this.state.currentDate} matchesFromAPI={this.state.matchesFromAPI} />}
								/>
								<Route
									path="/match/:id"
									render={props => <Match {...props} matchesFromAPI={this.state.matchesFromAPI} />}
								/>
							</Switch>
						)}
				</Router>
			</div>
		);
	}
}

export default App;
