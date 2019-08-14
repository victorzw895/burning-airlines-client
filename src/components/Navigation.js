import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="menu">
        <nav className="default-margin">
          <ul>
            <li className="margin-left0"><Link to="/airplanes">View Airplanes</Link></li>
            <li><Link to="/flights">View Flights</Link></li>
            <li><Link to="/search_nilana">Search Flights</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navigation;