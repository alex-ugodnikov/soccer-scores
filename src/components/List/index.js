import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {

	render() {

		const current = new Date();
		const currentDate = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
		const currentDateToCompare = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

		return (
			<div className="List">
				<h3>Matches Today ({currentDate})</h3>

				{this.props.matchesFromAPI
					.filter(match => match.date.substring(0, 10) === currentDateToCompare)
					.map((match, index) => {
						return (
							<div className="match-card" key={index}>
								<p>{match.title}</p>
								<p className="small">{match.competition.name}</p>
								<Link to={`/match/${index}`}><button>Watch Highlights</button>
                                </Link>
								{/* {match.videos.map(matchVideo => {                                       
										return (
											<div className="video-container">
												<p>{matchVideo.title}</p>
												<div dangerouslySetInnerHTML={{__html: matchVideo.embed}}></div>
											</div>
										);
									})} */}
							</div>
						);
					})} 
			</div>
		);
	}
}

export default List;
