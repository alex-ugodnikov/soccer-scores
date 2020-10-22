import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Match extends Component {

    state = {
        currentMatch: []
    }

	componentDidMount() {

        const { match } = this.props.match.params;

        console.log(match);

		axios.get('https://www.scorebat.com/video-api/v1/').then(result => {
			const currentMatch = result.data[match];
			this.setState({ currentMatch });			
		});
	}

    render() {
        return (
            <div>
             Single Match   
             <Link to={'/'}>
             <button>Go to home</button>
             </Link>
             
            </div>
        )
    }
}

export default Match