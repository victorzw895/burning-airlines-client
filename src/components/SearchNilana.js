import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Admin from './Admin';



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

    // componentDiMount()is invoked immediately after a component is mounted. 
    // Initialization that requires DOM nodes should go here. If you need to 
    // load data from a remote endpoint, 
    // this is a good place to instantiate the network request.

    componentDidMount() {
        this.fetchFligths().then((response) => {
            const originSelect = response.data.map((f) =>
                f.origin
            );
            const destinationSelect = response.data.map((f) =>
                f.destination
            );

            this.setState({
                originSelect: [...new Set(originSelect)],
                destinationSelect: [...new Set(destinationSelect)],
            });
        });
    }
    // [...new Set()]Set objects are collections of values. 
    // You can iterate through the elements of a set in insertion order. 
    // A value in the Set may only occur once; it is unique in the Set's collection.

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

        let tableItems

        if (items.length > 0) {
            tableItems = (
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Airplane</th>
                    </tr>
                    {items.map((item) => (
                        <tr>
                            <td>{item.dateTime}</td>
                            {/* <td>Flight: {item.flight}</td> */}
                            <td>{item.origin}</td>
                            <td>{item.destination}</td>
                            <td><Link className="table-item" to={`/flight/${item.airplane.planeNo}`}>{item.airplane.planeNo}</Link></td>
                        </tr>
                    ))}
                </table>
            );
        }

        return (
            <>


                <Navigation />
                <div className="wrapper" >
                    <p className="origin">Search Flight</p>
                    <h1 className="companyName">VPN Airlanes</h1>
                    <select className="searchArea" value={origin} onChange={this.setOrigin}>
                        <option>Choose your origin</option>
                        {originSelect.map((originOption) => (
                            <option value={originOption}>{originOption}</option>
                        ))}
                    </select>
                    <select className="searchArea" value={destination} onChange={this.setDestination}>
                        <option>Choose your destination</option>

                        {destinationSelect.map((destinationOption) => (
                            <option value={destinationOption}>{destinationOption}</option>
                        ))}
                    </select>

                    <button className="submit" type="button" onClick={this.fetchFligthsByOriginAndDestination}>Search</button>

                    <hr />

                    {tableItems}
                </div>
            </>

        )

    }
}

export default SearchNilana;
