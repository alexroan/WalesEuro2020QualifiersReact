import React from 'react';
import fixturesAndResults from './data/fixturesAndResults.json';
import Results from './results';
import Table from './table';

class Predictor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: fixturesAndResults,
			//Object, to run calculations on easily
			table: this.blankTable(),
			//Array, to sort and send to table component
			tableArray: []
		}
		this.calculateTablePositions();
	}

	blankTable() {
		return {
			"Croatia": {P:0,W:0,D:0,L:0,GF:0,GA:0,GD:0,Pts:0},
			"Wales": {P:0,W:0,D:0,L:0,GF:0,GA:0,GD:0,Pts:0},
			"Slovakia": {P:0,W:0,D:0,L:0,GF:0,GA:0,GD:0,Pts:0},
			"Hungary": {P:0,W:0,D:0,L:0,GF:0,GA:0,GD:0,Pts:0},
			"Azerbaijan": {P:0,W:0,D:0,L:0,GF:0,GA:0,GD:0,Pts:0}
		};
	}

	sortTable() {
		let pointsTable = this.state.table;
		var tableArray = [];
		for (var property in pointsTable) {
			let row = pointsTable[property];
			var arrayObj = {
				name: property,
				p: row.P,
				w: row.W,
				d: row.D,
				l: row.L,
				gf: row.GF,
				ga: row.GA,
				gd: row.GD,
				pts: row.Pts
			};
			tableArray[tableArray.length] = arrayObj;
		}

		tableArray.sort(function(a,b){
			return b.pts - a.pts || b.gd - a.gd || b.gf - a.gf;
		});
		this.state.tableArray = tableArray;
	}

	calculateTablePositions() {
		let pointsTable = this.blankTable();
		this.state.results.forEach(result => {
			var home = result.Home;
			var away = result.Away;

			if ( (!('Score' in home)) || (!('Score' in away))){
				return;
			}

			//Home team Played, GF, GA and GD
			pointsTable[home.Name].P++;
			pointsTable[home.Name].GF += home.Score;
			pointsTable[home.Name].GA += away.Score;
			pointsTable[home.Name].GD = pointsTable[home.Name].GF - pointsTable[home.Name].GA;
			//Away team Played, GF, GA and GD
			pointsTable[away.Name].P++;
			pointsTable[away.Name].GF += away.Score;
			pointsTable[away.Name].GA += home.Score;
			pointsTable[away.Name].GD = pointsTable[away.Name].GF - pointsTable[away.Name].GA;

			//W,D,L
			if(home.Score > away.Score){
				pointsTable[home.Name].W++;
				pointsTable[away.Name].L++;
			}
			else if (home.Score < away.Score){
				pointsTable[away.Name].W++;
				pointsTable[home.Name].L++;
			}
			else{
				pointsTable[home.Name].D++;
				pointsTable[away.Name].D++;
			}

			pointsTable[home.Name].Pts = (pointsTable[home.Name].W * 3) + pointsTable[home.Name].D;
			pointsTable[away.Name].Pts = (pointsTable[away.Name].W * 3) + pointsTable[away.Name].D;
		});
		this.state.table = pointsTable;
		this.sortTable();
	}

	scoresUpdated(gameIndex, homeScore, awayScore) {
		if(homeScore == null || awayScore == null) {
			return;
		}
		let results = this.state.results;
		results[gameIndex].Home.Score = parseInt(homeScore);
		results[gameIndex].Away.Score = parseInt(awayScore);
		this.setState({results: results});
		this.calculateTablePositions();
	}

	render() {
		return (
			<div className="row">
				<div className="predictor">
					<h1>Predictor</h1>
					<Results
						results={this.state.results}
						onChange={(i, hS, aS) => this.scoresUpdated(i, hS, aS)}
					/>
					<Table table={this.state.tableArray} />
				</div>
			</div>
		);
	}
}

export default Predictor