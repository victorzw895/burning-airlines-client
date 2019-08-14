import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

class SearchNilana extends Component {

    state = {
        items: [],
        origin: '',
        destination: '',
        originSelect: [],
        destinationSelect: [],
    };

    fetchFligths() {
        return axios.get("http://localhost:3000/flights.json");
    }

    componentDidMount() {
        this.fetchFligths().then((response) => {
            const originSelect = response.data.map((f) =>
                f.origin
            );
            const destinationSelect = response.data.map((f) =>
                f.destination
            );

            this.setState({ originSelect, destinationSelect });
        });
    }

    fetchFligthsByOriginAndDestination = () => {
        const { origin, destination } = this.state;
        if (origin === '' || destination === '') {
            alert('Your should inform the origin and destination');
            return;
        };

        this.fetchFligths().then((response) => {
            const data = response.data.filter((f) =>
                f.origin === origin && f.destination === destination
            );
            this.setState({ items: data });
        });
    };

    setOrigin = (event) => {
        this.setState({ origin: event.target.value })
    }

    setDestination = (event) => {
        this.setState({ destination: event.target.value })
    }

    render() {
        const { items, origin, originSelect, destination, destinationSelect } = this.state;
        return (
            <div className="wrapper" >
                <Navigation />
                <p className="origin">Search Flight</p>
                <h1 className="companyName">VPN Airlanes</h1>
                <select value={origin} onChange={this.setOrigin}>
                    <option>Choose your origin</option>
                    {originSelect.map((originOption) => (
                        <option value={originOption}>{originOption}</option>
                    ))}
                </select>
                <select value={destination} onChange={this.setDestination}>
                    <option>Choose your destination</option>

                    {destinationSelect.map((destinationOption) => (
                        <option value={destinationOption}>{destinationOption}</option>
                    ))}
                </select>

                <button className="submit" type="button" onClick={this.fetchFligthsByOriginAndDestination}>Search</button>

                <hr />

                {items.map((item) => (
                    <div className="results">
                        <p>Date: {item.dateTime}</p>
                        {/* <p>Flight: {item.flight}</p> */}
                        <p>Origin: {item.origin}</p>
                        <p>Destination: {item.destination}</p>
                        <p><Link to={`/flight/${item.airplane.planeNo}`}>Airplane: {item.airplane.planeNo}</Link></p>
                    </div>
                ))}
            </div>
        )
    }
}

export default SearchNilana;
