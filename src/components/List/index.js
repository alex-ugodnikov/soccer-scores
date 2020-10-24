import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
	// constructor(props) {
	// 	super(props);
	// 	const { currentDate } = this.props;
	// 	const currentDateFormatted = `${currentDate.getMonth() +
	// 		1}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
	// 	this.state = { currentDate, currentDateFormatted };
	// }

	decreaseDate = () => {
		const newCurrentDate = new Date();
		newCurrentDate.setDate(this.props.currentDate.getDate() - 1);
		this.props.setDate(newCurrentDate);
	}

	render() {
		const { currentDate } = this.props;
		const currentDateFormatted = `${currentDate.getMonth() +
			1}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
		console.log(currentDate);
		console.log(this.props.matchesFromAPI);
		const currentDateToCompare = `${currentDate.getFullYear()}-${currentDate.getMonth() +
			1}-${currentDate.getDate()}`;

		return (
			<div className="List">
				<h3>
					Date: {currentDateFormatted}
					<br />
					<button onClick={this.decreaseDate}>PREV</button>
					<button onClick={() => this.props.setDate(new Date())}>TODAY</button>

				</h3>

				{this.props.matchesFromAPI
					.filter(match => match.date.substring(0, 10) === currentDateToCompare)
					.map((match) => {
						return (
							<div className="match-card" key={match.id}>
								<div>
									<p>{match.title}</p>
									<p className="small">{match.competition.name}</p>
									<Link to={`/match/${match.id}`}>
										<button>Watch Highlights ({match.videos.length})</button>
									</Link>
								</div>
							</div>
						);
					})}
			</div>
		);
	}
}

export default List;
