import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SERVER_URL = 'http://localhost:3000/flights.json'

class Flights extends Component {
    constructor() {
        super();
        this.state = {
            flights: []
        };
        this.saveFlights = this.saveFlights.bind( this )

              // Polling
        const fetchFlights = () => {
        axios.get(SERVER_URL).then((results) => {
            console.log( results );
            this.setState({ flights: results.data });
            setTimeout( fetchFlights, 10000);
        });
        };

        fetchFlights();
    }

    saveFlights(flights) {
        // console.log(flights);
        // this.setState( { flights: [...this.state.flights, flights]  } ); // Using ES6 spread operator so we don't change the original value.
        // axios.get(SERVER_URL, {flights: flights}).then((result) => {
        //     console.log(result)
        // });
        axios.post(SERVER_URL, {flights: flights}).then((result) => {
        console.log(result)
        });
    }

    render() {
        return (
            <div>
                <Navigation />
                <h2>This is the Flights page, Admin select flights and book flights</h2>

                <CreateFlight onSubmit={ this.saveFlights } flights={ this.state.flights } />
                <FlightList flights={ this.state.flights } />

            </div>
        )
    };
}
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
    constructor() {
        super();
        this.state = {
            flight: '',
            date: '',
            origin: '',
            destination: '',
            plane: ''
        };
        this._handleSubmit = this._handleSubmit.bind( this );
        this._handleFlightInput = this._handleFlightInput.bind( this );
        this._handleDateInput = this._handleDateInput.bind( this );
        this._handleOriginInput = this._handleOriginInput.bind( this );
        this._handleDestinationInput = this._handleDestinationInput.bind( this );
        this._handlePlaneInput = this._handlePlaneInput.bind( this );
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        console.log(this.props.onSubmit);
        this.props.onSubmit( this.state );
    }

    _handleFlightInput(e) {
        this.setState( {flight: e.target.value} );
    }

    _handleDateInput(e) {
        this.setState( {date: e.target.value} );
    }

    _handleOriginInput(e) {
        this.setState( {origin: e.target.value} );
    }

    _handleDestinationInput(e) {
        this.setState( {destination: e.target.value} );
    }

    _handlePlaneInput(e) {
        this.setState( {plane: e.target.value} );
    }

    render() {
        return (
            <div>
                <form onSubmit={ this._handleSubmit }>
                    <h2>Burning Airlines</h2>
                    <input type="submit" value="Create" />

                    <label>Flight #</label>

                    <input type="text" onInput={ this._handleFlightInput }/>
                    <label>Date</label>
                    <input type="date" onInput={ this._handleDateInput }/>
                    <label>Origin</label>
                    <select onInput={ this._handleOriginInput }>
                        {this.props.flights.map( (f) => <option>{f.origin}</option>)}
                    </select>
                    <label>Destination</label>
                    <select onInput={ this._handleDestinationInput }>
                        {this.props.flights.map( (f) => <option>{f.destination}</option>)}
                    </select>
                    <label>Plane</label>
                    <select onInput={ this._handlePlaneInput }>
                        {this.props.flights.map( (f) => <option>{f.airplane.planeNo}</option>)}
                    </select>
                    {/* <input type="submit" value="Save" /> */}

                </form>
            </div>
        )
    }
}

class FlightList extends Component {

    render() {
        return (
            <div>
                Coming soon, list of available flights
                {this.props.flights.map( (f) => 
                    <p>
                        Date: {f.date} 
                        Destination: {f.destination} 
                        Flight: {f.flight} 
                        Origin: {f.origin} 
                        Plane: {f.plane}
                    </p>)
                }
            </div>
        )
    }
}



export default Flights;