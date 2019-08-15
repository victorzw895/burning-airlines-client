import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const SERVER_URL = 'http://localhost:3000/airplanes.json';
const SERVER_URL = 'http://18649033.ngrok.io/airplanes.json';

class Airplanes extends Component {
  constructor() {
    super();
    this.state = {
      plane: [],
      planes: []
    };
    this.savePlane = this.savePlane.bind(this);


    const fetchPlanes = () => {
      axios.get(SERVER_URL).then((result) => {
        console.log(result.data);
        this.setState({ planes: result.data, plane: result.data[result.data.length - 1] });
        setTimeout(fetchPlanes, 20000)
      });
    }
    fetchPlanes();
  }
  savePlane(p, r, c) {
    axios.post(SERVER_URL, { planeNo: p, row: r, columns: c }).then((result) => {
      this.setState({ planes: [...this.state.planes, result.data] })
      console.log('gfgfggh', this.state.planes);
      console.log(result.data);
    });
  }
  render() {
    return (
      <div>
        {/* <h2>This is the Airplanes page. Where admin can add new airplanes</h2> */}
        <p><Link className="viewFlights" to="/flights">View Flights</Link></p>
        <Form onSubmit={this.savePlane} />
        <AllPlanes planes={this.state.planes} plane={this.state.plane} />
        <p><Link className="backHome" to="/">Back Home</Link></p>
      </div>
    );
  }
}


class Form extends Component {
  constructor() {
    super();
    this.state = { planeNo: '', columns: '', row: '' }
    this._handleRow = this._handleRow.bind(this);
    this._handlePlane = this._handlePlane.bind(this);
    this._handleColumn = this._handleColumn.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.planeNo, this.state.row, this.state.columns);
  }

  _handlePlane(e) {
    console.log("works");
    this.setState({ planeNo: e.target.value });
  }

  _handleColumn(e) {
    console.log("works");
    this.setState({ columns: e.target.value });
  }

  _handleRow(e) {
    console.log("works");
    this.setState({ row: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <label>Plane number
      <input className="SearchArea" type="number" defaultValue="" onInput={this._handlePlane} />
        </label>
        <label>Nr of columns
      <input className="SearchArea" type="text" defaultValue="" onInput={this._handleColumn} />
        </label>
        <label>Nr of rows
      <input className="SearchArea" type="number" defaultValue="" onInput={this._handleRow} />
        </label>
        <input className="SearchArea" type="submit" value="Add a new airplane" />
      </form>
    );
  }
}


// const LinkToPlaneNo = (props) => <Link to=> Plane Name: {props.planeNo}</Link>

class AllPlanes extends Component {
  constructor() {
    super();
    this.state = {

      plane: []
    }
    this.savePlane = this.savePlane.bind(this);
  }

  savePlane(n, r, c) {
    console.log('working so far');
    console.log(n, r, c);
    this.setState({ plane: [...this.state.plane, { name: n, rows: r, columns: c }] })
  }


  render() {
    return (
      <div>
        <PlaneList onClick={this.savePlane} planes={this.props.planes} />

        <PlaneDisplay planes={this.props.planes} clickPlane={this.state.plane} lastPlane={this.props.plane} />
      </div>
    )
  }
}




class PlaneList extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      rows: [],
      columns: []
    }
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    this.setState({
      name: e.target.getAttribute('data_name'),
      // rows: Array(Number(e.target.getAttribute('data_rows'))).fill(null), 
      rows: e.target.getAttribute('data_rows'),
      // columns: Array(Number(e.target.getAttribute('data_columns'))).fill(null)
      columns: e.target.getAttribute('data_columns')
    });
    this.props.onClick(this.state.name, this.state.rows, this.state.columns);
  }

  render() {
    return (
      <div>
        {this.props.planes.map((p) =>
          <p key={p.id} onClick={this._handleClick}>
            <a href={`/flight/${p.planeNo}`} data_name={p.planeNo} data_rows={p.row} data_columns={p.columns}> PLANE NAME: {p.planeNo} </a>
            ROW: {p.row} COLUMN: {p.columns}
          </p>)
        }
      </div>
    )
  }
}

// function Square (c) {
//   for (let i = 0; i < c; i++) {
//     return (
//       <button className="square" />
//     );
//   }
// }
// render() {
//   return (
//     <div>
//       {this.renderSquare}
//     </div>
//   )
// }
// }
class PlaneDisplay extends Component {
  renderDisplay = (rows, columns) => {
    const r = Number(rows);
    const c = Number(columns);
    let table = [];
    for (let i = 0; i < r; i++) {
      let rows = [];
      for (let j = 0; j < c; j++) {
        rows.push(<td className="columns">{`${i} ${j}`}</td>)
      }
      table.push(<tr className="rows">{rows}</tr>)
    }
    return (
      <div className="board-row">
        {table}
      </div>
    )
  }

  render() {
    return (
      <div>
        {/* {console.log(this.props.lastPlane)} */}
        {this.renderDisplay(this.props.lastPlane.row, this.props.lastPlane.columns)}
      </div>
    )
  }
}




export default Airplanes;
