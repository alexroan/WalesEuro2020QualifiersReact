import React from 'react';
import fixturesAndResults from './data/fixturesAndResults.json';
import Results from './results';
import Table from './table';

class Predictor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: fixturesAndResults,
			table: []
		}
		this.calculateTablePositions();
	}

	calculateTablePositions() {
		//TODO
	}

	render() {
		return (
			<div className="predictor">
				Predictor
				<Results results={this.state.results} />
				<Table table={this.state.table} />
			</div>
		);
	}
}

export default Predictor