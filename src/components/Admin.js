import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Admin extends Component {
  render() {
    return (
      <div className="menu">
        <h1>Admin Area</h1>
        <button className="margin-left0"><Link to="/airplanes">View Airplanes</Link></button>
        <button><Link to="/flights">View Flights</Link></button>
      </div>

    )
  }
}


export default Admin;
// <button className="submit" type="button" onClick={this.fetchFligthsByOriginAndDestination}>Search</button>

