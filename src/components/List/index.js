import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	render() {
		console.log(this.state.date);
		const current = new Date();
		const currentDate = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
		const currentDateToCompare = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

		return (
			<div className="List">
				<h3>
					Date: {currentDate}
					<br />
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
