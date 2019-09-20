import React from 'react';

class Result extends React.Component {
    render() {
        const home = this.props.result.Home;
        const away = this.props.result.Away;
        return (
            <div className="result">
                <div className="home-team">
                    {home.Name}
                </div>
                <div className="home-score"></div>
                <div className="away-score"></div>
                <div className="away-team">
                    {away.Name}
                </div>
            </div>
        )
    }
}

export default Result;