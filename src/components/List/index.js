import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
	constructor(props) {
		super(props);
		const currentDate = new Date();
		const currentDateFormatted = `${currentDate.getMonth() +
			1}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
		this.state = { currentDate, currentDateFormatted };
	}

	decreaseDate = () => {
		const newCurrentDate = new Date();
		newCurrentDate.setDate(this.state.currentDate.getDate() - 1);
		const newCurrentDateFormatted = `${newCurrentDate.getMonth() +
			1}-${newCurrentDate.getDate()}-${newCurrentDate.getFullYear()}`;
		console.log(newCurrentDate);
		this.setState({ currentDate: newCurrentDate, currentDateFormatted: newCurrentDateFormatted});
	}

	render() {
		const { currentDate, currentDateFormatted } = this.state;
		console.log(currentDate);
		const currentDateToCompare = `${currentDate.getFullYear()}-${currentDate.getMonth() +
			1}-${currentDate.getDate()}`;

		return (
			<div className="List">
				<h3>
					Date: {currentDateFormatted}
					<br />
					<button onClick={this.decreaseDate}>PREV</button>
					{/* <Link to={`#`} className="date-control">{`<Prev`}</Link>
					<Link to={`#`} className="date-control">{`Next>`}</Link> */}
				</h3>

				{this.props.matchesFromAPI
					.filter(match => match.date.substring(0, 10) === currentDateToCompare)
					.map((match, index) => {
						return (
							<div className="match-card" key={index}>
								<div>
									<p>{match.title}</p>
									<p className="small">{match.competition.name}</p>
									<Link to={`/match/${index}`}>
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
