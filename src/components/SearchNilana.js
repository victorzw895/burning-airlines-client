import React, { Component } from 'react';
import axios from 'axios';


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

        axios.get(`http://localhost:3000/search/${origin}/${destination}`).then((response) => {

            this.setState({ items: response.data });
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
            <div>
                <p className="origin">Search Flight</p>
                <h1 className="companyName">VPN Airlane</h1>
                <input className="search" type="search" placeholder="search by origin" onInput={this.setOrigin} />
                <input className="search" type="search" placeholder="search by destination" onInput={this.setDestination} />
                <button className="submit" type="button" onClick={this.fetchFligthsByOriginAndDestination}>Search</button>
                <button className="cancel" type="button" onClick={this.fetchFligthsByOriginAndDestination}>Cancel</button>
                <button className="save" type="button" onClick={this.fetchFligthsByOriginAndDestination}>Save</button>


                {items.map((item) => (
                    <div>
                        <p>Date: {item.dateTime}</p>
                        {/* <p>Flight: {item.flight}</p> */}
                        <p>Origin: {item.origin}</p>
                        <p>Destination: {item.destination}</p>
                        <p>Airplane: {item.airplane_id}</p>
                    </div>
                ))}
            </div>



        )
    }
}

export default SearchNilana;
