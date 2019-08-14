import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Airplanes extends Component {
  constructor(){
super();
this.state = {
planes : [] };
this.savePlane = this.savePlane.bind(this);

  }
  savePlane(plane) {
this.setState({ planes: [...this.state.planes, plane]})
console.log(plane);
  }
    render() {
        return (
            <div>
                <h2>This is the Airplanes page. Where admin can add new airplanes</h2>
                <p><Link to="/flights">View Flights</Link></p>
                <p><Link to="/">Back Home</Link></p>
                <Form onSubmit={this.savePlane}/>
                <AllPlanes planes={this.state.planes}/>
            </div>
        );
    }
}


class Form extends Component {
  constructor(){
    super();
    this.state = { plane: '', column: '', row: ''}
    this._handleRow= this._handleRow.bind(this);
    this._handlePlane= this._handlePlane.bind(this);
    this._handleColumn= this._handleColumn.bind(this);
    this._handleSubmit= this._handleSubmit.bind(this);
  }

  _handleSubmit(e){
    e.preventDefault();
    console.log(this.state.plane);
    this.props.onSubmit(this.state);
this.setState( { plane: '', row: '', column: '' });
  }

_handlePlane(e){
  console.log("works");
  this.setState({plane: e.target.value});
}

_handleColumn(e){
  console.log("works");
    this.setState({column: e.target.value});
}

_handleRow(e){
  console.log("works");
  this.setState({row: e.target.value});
}

  render(){
    return(
      <form onSubmit={this._handleSubmit}>
      <label>Plane name
      <input type="text" value={ this.state.plane} onChange={this._handlePlane}/>
      </label>
      <label>Nr of columns
      <input type="text" value={ this.state.column} onChange={this._handleColumn}/>
      </label>
      <label>Nr of rows
      <input type="number" value={ this.state.row} onChange={this._handleRow}/>
      </label>
      <input type="submit" value="Add a new airplane" />
      </form>
    );
  }
}

class AllPlanes extends Component {
  render(){
    return(
      <div>{this.props.planes.map( (p) => <p key={p.plane}> PLANE NAME: {p.plane} ROW: {p.row} COLUMN: {p.column} </p>)}  </div>
    )
  }
}

export default Airplanes;
