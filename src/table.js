import React from 'react';

class Table extends React.Component {
    render() {
        return (
            <div className="col-sm-6">
                Table
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Pl</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        )
    }
}

export default Table;