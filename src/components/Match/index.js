import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, BrowserHistory } from 'react-router-dom';

class Match extends Component {
	render() {

        //const match = this.props.matchesFromApi[this.props.params.id];
        const id = this.props.params.id;
        console.log(id)

		return (
			<div>
				Single Match&nbsp;
				<Link to={'/'}>
					<button>Go to home</button>
				</Link>
			</div>
		);
	}
}

export default Match;
