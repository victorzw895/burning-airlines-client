import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Flights extends Component {
    render() {
        return (
            <div>
                <h2>This is the Flights page, users select flights and book flights</h2>
                <p><Link to="/airplanes">View Airplanes</Link></p>
                <p><Link to="/">Back Home</Link></p>
            </div>
        )
    };
}

export default Flights;