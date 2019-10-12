import React from 'react';

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameIndex: props.gameIndex,
            homeName: props.result.Home.Name,
            homeScore: (props.result.Home.hasOwnProperty('Score')) ? props.result.Home.Score : undefined,
            awayName: props.result.Away.Name,
            awayScore: (props.result.Away.hasOwnProperty('Score')) ? props.result.Away.Score : undefined,
            isPrediction: (props.result.Home.hasOwnProperty('Score')) ? false : true,
        }
        this.scoreChange = this.scoreChange.bind(this);
    }

    scoreChange(event) {
        //Use these to call event handler in parent, due to
        //setState() being asynchronous
        let homeScore = this.state.homeScore;
        let awayScore = this.state.awayScore;

        let score = event.target.value;
        let side = event.target.getAttribute('side');
        if (side === this.state.homeName) {
            // this.state.homeScore = score;
            this.setState({homeScore: score});
            homeScore = score;
        }
        else{
            // this.state.awayScore = score;
            this.setState({awayScore: score});
            awayScore = score;
        }
        this.props.onChange(this.state.gameIndex, homeScore, awayScore);
    }

    renderOldScore(score) {
        return (
            <div className="col-xs-6">
                <label
                    key={"game-" + this.props.gameIndex + "-" + score }
                    className="control-label"
                >
                    {score}
                </label>
            </div>
        );
    }

    renderFutureScore(teamName) {
        return  (
            <div className="col-xs-6">
                <input
                    type="number"
                    min="0"
                    className="form-control input-sm"
                    onChange={this.scoreChange}
                    id={this.props.gameIndex + "-" + teamName }
                    side={teamName}
                ></input>
            </div>
        )
    }

    render() {
        let self=this;
        let homeScoreDiv = self.renderFutureScore(this.state.homeName);
        let awayScoreDiv = self.renderFutureScore(this.state.awayName);
        if (!this.state.isPrediction) {
            homeScoreDiv = self.renderOldScore(this.state.homeScore);
            awayScoreDiv = self.renderOldScore(this.state.awayScore);
        }
        return (
            <div className="form-group result game" id={"game-" + this.state.gameIndex}>
                <div className="col-xs-3">
                    <label className="control-label">{this.state.homeName}</label>
                </div>
                <div className="col-xs-6">
                    <div className="home-score">{homeScoreDiv}</div>
                    <div className="away-score">{awayScoreDiv}</div>
                </div>
                <div className="col-xs-3">
                    <label className="control-label">{this.state.awayName}</label>
                </div>
            </div>
        )
    }
}

export default Result;