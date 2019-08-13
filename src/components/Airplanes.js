import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Airplanes extends Component {
    render() {
        return (
            <div>
                <h2>This is the Airplanes page. Where admin can add new airplanes</h2>
                <p><Link to="/flights">View Flights</Link></p>
                <p><Link to="/">Back Home</Link></p>
            </div>
        )
    };
}

export default Airplanes;

