import React, { Component } from 'react';
import axios from 'axios';

export default class List extends Component {
    
    state = {
        matches: [],
        currentDate: '1'
    };

	componentDidMount() {

        const current = new Date();

        console.log(current);

        const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        this.setState({ currentDate });
        console.log(this.currentDate);

		axios.get('https://www.scorebat.com/video-api/v1/').then(result => {
			const matches = result.data;
            this.setState({ matches });
            console.log(matches);
		});
	}

	render() {
        
		return <>
        <h3>Matches Today ({this.currentDate})</h3>
        {this.state.matches.map((match, index) =>
        <div key={index}>{match.title}</div>
        )}
        </>;
	}
}
