import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Admin extends Component {
  render() {
    return (
      <div className="nav">
        <div className="wrapper">
          <div className="container">
            <h1>Admin Area</h1>
            <button className="backH"><Link to="/#">Back Home</Link></button>
            <button ><Link className="searchAirplanes" to="/airplanes">View Airplanes</Link></button>
            <button><Link className="searchAirplanes" to="/flights">View Flights</Link></button>
          </div>
        </div>
      </div>

    )
  }
}


export default Admin;
// <button className="submit" type="button" onClick={this.fetchFligthsByOriginAndDestination}>Search</button>

