import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Admin from './Admin';


class Navigation extends Component {

  // <li className="margin-left0"><Link to="/airplanes">View Airplanes</Link></li>
  //           <li><Link to="/flights">View Flights</Link></li>
  render() {
    return (
      <div className="menu">
        <nav className="default-margin">
          <ul>
            <li className="logo"><Link to="/#">VPN Airlanes</Link></li>
            <li><Link to="/search_nilana">User Area</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navigation;