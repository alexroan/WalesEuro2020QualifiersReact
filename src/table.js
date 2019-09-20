import React from 'react';

function TableRow(props) {
    return (
        <tr>
            <td>{props.row.name}</td>
            <td>{props.row.p}</td>
            <td>{props.row.w}</td>
            <td>{props.row.d}</td>
            <td>{props.row.l}</td>
            <td>{props.row.gf}</td>
            <td>{props.row.ga}</td>
            <td>{props.row.gd}</td>
            <td>{props.row.pts}</td>
        </tr>
    )
}

class Table extends React.Component {

    renderRow(row, index) {
        return (
            <TableRow key={index} row={row} />
        );
    }

    render() {
        let self = this;
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
                    <tbody>
                        {
                            this.props.table.map((row, index) => {
                                return self.renderRow(row, index);
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;