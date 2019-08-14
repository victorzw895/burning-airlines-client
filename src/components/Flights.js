import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const FLIGHT_URL = 'http://localhost:3000/flights.json'
const FLIGHT_URL = 'http://18649033.ngrok.io/flights.json'
// const PLANE_URL = 'http://localhost:3000/airplanes.json'
const PLANE_URL = 'http://18649033.ngrok.io/airplanes.json'

class Flights extends Component {
    constructor() {
        super();
        this.state = {
            flights: []
        };
        this.saveFlights = this.saveFlights.bind( this )

              // Polling
        const fetchFlights = () => {
        axios.get(FLIGHT_URL).then((results) => {
            console.log( results );
            this.setState({ flights: results.data });
            setTimeout( fetchFlights, 10000);
        });
        };

        fetchFlights();

    }

    saveFlights = (date, ori, des, plane, airplanes, planeId) => {
        // console.log(flights);
        // this.setState( { flights: [...this.state.flights, flights]  } ); // Using ES6 spread operator so we don't change the original value.
        // axios.get(FLIGHT_URL, {flights: flights}).then((result) => {
        //     console.log(result)
        // });
        // console.log(this.state.flights);
        // const planeName;
        // airplanes.map( (ap) => console.log((ap.planeNo === Number(plane)), ap, ap.planeNo, plane))
        // const test1 = airplanes.filter( (ap) => ap.planeNo === Number(plane));
        // console.log(test1[0].id);
        // const test = airplanes.map( (ap) => ap.planeNo === Number(plane));
        // console.log(test);
        // const ap_Id = test1[0].id;
        // const planeName = test1[0].planeNo;
                // console.log(ap.id);
        // console.log(ap_Id, planeName)
        // id = ap.id
        // planeName = ap.planeNo
        //     }        
        // )
        // console.log(airplanes);
        axios.post(FLIGHT_URL, {dateTime: date, origin: ori, destination: des, airplane_id: planeId}).then((result) => {
        // , airplane.planeNo: planeName
            console.log(this.state.flights)
            console.log(result);

            this.setState({ flights: [...this.state.flights, result.data]})
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
            // flight: '',
            date: '',
            origin: '',
            destination: '',
            plane: '',
            airplane_id: 0,
            airplanes: []
        };
        this._handleSubmit = this._handleSubmit.bind( this );
        // this._handleFlightInput = this._handleFlightInput.bind( this );
        this._handleDateInput = this._handleDateInput.bind( this );
        this._handleOriginInput = this._handleOriginInput.bind( this );
        this._handleDestinationInput = this._handleDestinationInput.bind( this );
        this._handlePlaneInput = this._handlePlaneInput.bind( this );

        const fetchPlanes = () => {
            axios.get(PLANE_URL).then((results) => {
                console.log( results );
                this.setState({ airplanes: results.data });
                setTimeout( fetchPlanes, 10000);
            });
        };
    
        fetchPlanes();
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        console.log(this.props.onSubmit);
        this.props.onSubmit( this.state.date, this.state.origin, this.state.destination, this.state.plane, this.state.airplanes, this.state.airplane_id );
    }

    // _handleFlightInput(e) {
    //     this.setState( {flight: e.target.value} );
    // }

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
        const test = this.state.airplanes.filter( (ap) => ap.planeNo === Number(e.target.value))
        this.setState( {plane: e.target.value, airplane_id: test[0].id} );
    }

    render() {
        return (
            <div>
                <form onSubmit={ this._handleSubmit }>
                    <h2>Burning Airlines</h2>
                    <input type="submit" value="Create" />

                    <label>Flight #</label>

                    {/* <input type="text" onInput={ this._handleFlightInput }/> */}
                    <label>Date</label>
                    <input type="date" onInput={ this._handleDateInput }/>
                    <label>Origin</label>
                    <input type="text" onInput={ this._handleOriginInput }/>
                    <label>Destination</label>
                    <input type="text" onInput={ this._handleDestinationInput }/>
                    <label>Plane</label>
                    <select onInput={ this._handlePlaneInput }>
                        {/* {this.props.flights.map( (f) => <option key={f.id}>{f.airplane.planeNo}</option>)} */}
                        {this.state.airplanes.map( (f) => <option key={f.id}>{f.planeNo}</option>)}
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
                        Date: {f.dateTime} 
                        Destination: {f.destination} 
                        {/* Flight: {f.flight}  */}
                        Origin: {f.origin} 
                        Plane: {f.airplane.planeNo}
                    </p>)
                }
            </div>
        )
    }
}



export default Flights;