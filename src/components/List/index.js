import React, { Component } from 'react';
import axios from 'axios';

export default class List extends Component {
	state = {
		matches: []
	};

	componentDidMount() {
		const current = new Date();
		const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

		axios.get('https://www.scorebat.com/video-api/v1/').then(result => {
			const matches = result.data;
			this.setState({ matches });
			console.log(matches);
		});
	}

	render() {
		const current = new Date();
		const currentDate = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
		const currentDateToCompare = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

		return (
			<div className="List">
				<h3>Matches Today ({currentDate})</h3>

				{this.state.matches
					.filter(match => match.date.substring(0, 10) === currentDateToCompare)
					.map((match, index) => {
						return (
							<div className="match-card" key={index}>
								<p>{match.title}</p>
								<p class="small">{match.competition.name}</p>
								<p>
									{match.videos.map(matchVideo => {
                                        
										return (
											<div>
												<p>{matchVideo.title}</p>
												{matchVideo.embed}
                                                
											</div>
										);
									})}
								</p>
							</div>
						);
					})}
			</div>
		);
	}
}
