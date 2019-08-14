import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <p><Link to="/airplanes">View Airplanes</Link></p>
                <p><Link to="/">Back Home</Link></p>
            </div>
        )
    }
}

class CreateFlight extends Component {
    render() {
        return (
            <div>
                <form>
                    <h2>Burning Airlines</h2>
                    <input type="submit" value="Create"/>

                    <input type="text"/>
                </form>
            </div>
        )
    }
}


class Flights extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <CreateFlight />
                <h2>This is the Flights page, Admin select flights and book flights</h2>

            </div>
        )
    };
}

export default Flights;