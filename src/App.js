import React from 'react';

import List from './components/List';

import Navbar from './components/Navbar';

import './App.css'

// API will be used: https://www.scorebat.com/video-api/

function App() {
	return (
		<div className="App">
			<Navbar />
			<List />
		</div>
	);
}

export default App;
