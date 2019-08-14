import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';



class SearchNilana extends Component {
    state = {
        items: [],
        origin: '',
        destination: '',
    };
    fetchFligthsByOriginAndDestination = () => {
        const { origin, destination } = this.state;
        if (origin === '' || destination === '') {
            alert('Your should inform the origin and destination');
            return;
        };


        //axios.get(`http://localhost:3000/search/${origin}/${destination}`).then((response) => {
        axios.get("http://localhost:3000/flights.json").then((response) => {
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
        const { items } = this.state;
        return (
            <div className="wrapper" >
                <Navigation />
                <p className="origin">Search Flight</p>
                <h1 className="companyName">VPN Airlanes</h1>
                <input className="search" type="search" placeholder="search by origin" onInput={this.setOrigin} />
                <input className="search" type="search" placeholder="search by destination" onInput={this.setDestination} />
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
