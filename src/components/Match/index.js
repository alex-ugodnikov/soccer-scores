import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Match extends Component {
	render() {
		const { id } = this.props.match.params;
		const match = this.props.matchesFromAPI[id];
		return (
			<div>
				<Link to={'/'}>
					<button>Go to home</button>
				</Link>
				<div className="match-card-detailed">
					<div>
						<div style={{ float: 'right' }}>{match.date.substring(0, 10)}</div>
						<h3>{match.title}</h3>

						<p className="small">{match.competition.name}</p>

						{match.videos.reverse().map((matchVideo,index) => {
							return (
								<div className="video-container" key={index}>
									<p>{matchVideo.title}</p>
									<div dangerouslySetInnerHTML={{ __html: matchVideo.embed }} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Match;
