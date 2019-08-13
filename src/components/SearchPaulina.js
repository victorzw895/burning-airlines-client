import React, { Component } from 'react';
import axios from 'axios';

// const SERVER_URL = 'http://localhost:3000/secrets.json';

class SearchPaulina extends Component {
    render() {
        return (
            <div>
                <h1>Search Flight</h1>
                <SearchForm /*onSubmit={ this.saveSecret } *//>
                <FlightList /*secrets={ this.state.secrets }*/ />
            </div>
        );
    }
}

class SearchForm extends Component {
    render() {
        return (
            <form>
 
            </form>
        );
    }
}

class FlightList extends Component {
    render() {
        return(
            <div>
            </div>
        );
    }
}

export default SearchPaulina;