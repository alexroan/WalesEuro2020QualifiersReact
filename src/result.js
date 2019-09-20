import React from 'react';

class Result extends React.Component {

    renderScore(team) {
        if (team.hasOwnProperty('Score')) {
            return (
                <div className="col-xs-6">
                    <label
                        key={"game-" + this.props.gameIndex + "-" + team.Name }
                        className="control-label"
                    >
                        {team.Score}
                    </label>
                </div>
            );
        }
        else{
            return  (
                <div className="col-xs-6">
                    <input type="number" min="0" className="form-control input-sm"></input>
                </div>
            )
        }
    }

    render() {
        let self=this;
        const home = this.props.result.Home;
        const away = this.props.result.Away;
        return (
            <div className="form-group result game" id={"game-" + this.props.gameIndex}>
                <div className="col-xs-3">
                    <label className="control-label">{home.Name}</label>
                </div>
                <div className="col-xs-6">
                    <div className="home-score">{self.renderScore(home)}</div>
                    <div className="away-score">{self.renderScore(away)}</div>
                </div>
                <div className="col-xs-3">
                    <label className="control-label">{away.Name}</label>
                </div>
            </div>
        )
    }
}

export default Result;