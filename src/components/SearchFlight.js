import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchFlight extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Select Origin</label>
                        <select>
                            <option>SYD</option>
                            <option>LHR</option>
                            <option>NRT</option>
                        </select>
                    </div>

                    <div>
                        <label>Select Destination</label>
                        <select>
                            <option>SYD</option>
                            <option>LHR</option>
                            <option>NRT</option>
                        </select>
                    </div>
                    <input type="submit" value="Search"/>
                </form>
                <FlightList />
            </div>
        )
    }
}

class FlightList extends Component {
    render() {
        return (
            <div>
                {/* .map() to get all flights from database listed */}
                <p><Link to="/flight/757">757</Link></p>
            </div>
        )
    }
}

export default SearchFlight;