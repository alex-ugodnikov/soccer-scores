import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Match extends Component {
	render() {

        const {id} = this.props.match.params;
        const match = this.props.matchesFromAPI[id];
        console.log(match);

		return (
			<div>
				Single Match&nbsp;
				<Link to={'/'}>
					<button>Go to home</button>
				</Link>

                <div className="match-card">
								<p>{match.title}</p>
								<p className="small">{match.competition.name}</p>

								{match.videos.map(matchVideo => {                                       
										return (
											<div className="video-container">
												<p>{matchVideo.title}</p>
												<div dangerouslySetInnerHTML={{__html: matchVideo.embed}}></div>
											</div>
										);
									})}
                                    
							</div>                
			</div>
		);
	}
}

export default Match;
