import React from 'react';
import Result from './result';


class Results extends React.Component {

    renderResult(result) {
        return (
            <Result result={result} />
        );
    }

    render() {
        let self = this;
        return (
            <div className="results">
                Results
                {
                    this.props.results.map((result, index) => {
                        return self.renderResult(result);
                    })
                }
            </div>
        )
    }
}

export default Results;