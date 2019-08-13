import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/flights.json'

class SearchPaulina extends Component {
  constructor(){
super();
this.state = {
flights: [],
flight_id: ""
};
this.saveFlight = this.saveFlight.bind(this);

const fetchPlanes =() => {
  axios.get(SERVER_URL).then((result) => {
    this.setState({flights: result.data});
  });
};
fetchPlanes();
}



saveFlight(origin, destination) {
axios.post(SERVER_URL, {origin: origin, destination:destination}).then ((result) =>{
this.setState( {  flights: [...this.state.flights, origin, destination]});
  console.log(result);
});
}


// saveFlight(destination) {
//   this.setState( {  flights: [...this.state.flights, destination]});
// }

  render(){
  return(
    <div>
    <h2>Hi!</h2>
    <Form onSubmit={this.saveFlight}/>
    <Result flights={this.state.flights}/>
    </div>
  );
  }
}

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {origin: 'Sydney',
  destination: 'Tokyo'};


this.handleChange1 = this.handleChange1.bind(this);
this.handleChange2 = this.handleChange2.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange1(event) {
  this.setState({origin:event.target.value1});
}

handleChange2(event) {
  this.setState({destination:event.target.value2});
}

handleSubmit(event) {
  event.preventDefault();
    this.props.onSubmit( this.state.origin, this.state.destination);


    console.log(this.state.value1 + this.state.value2);
}

  render(){
    return(
      <form onSubmit={ this.handleSubmit }>
             <label> Origin:
               <select value={this.state.origin} onChange={ this.handleChange1}>
               <option value="Sydney"> Sydney</option>
                <option value="Canberra"> Canberra</option>
                 <option value="Auckland"> Auckland</option>
                </select>
             </label><br />
             <label> Destination:
               <select value={this.state.destination} onChange={ this.handleChange2}>
               <option value="Tokyo"> Tokyo</option>
                <option value="Wellington"> Wellington</option>
                 <option value="Brisbane"> Brisbane</option>
                </select>
             </label><br />
             <input type="submit" value="Search" />
      </form>
    );
  }
}

class Result extends Component{
  render(){
    return(
      <div>{this.props.flights.map( (f) => <p>{f.origin,
        f.destination}</p>)}
       </div>
    );
  }
}

export default SearchPaulina;
