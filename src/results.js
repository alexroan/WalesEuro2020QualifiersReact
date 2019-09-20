import React from 'react';
import Result from './result';


class Results extends React.Component {

    renderResult(result, index) {
        return (
            <Result key={index} result={result} gameIndex={index} />
        );
    }

    render() {
        let self = this;
        return (
            <div className="col-sm-6">
                Results
                <form className="form-horizontal text-center">
                    {
                        this.props.results.map((result, index) => {
                            return self.renderResult(result, index);
                        })
                    }
                </form>
            </div>
        )
    }
}

export default Results;