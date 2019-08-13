// FOR LAST WIREFRAME 4

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Flight extends Component {
    render() {
        return (
            <div>
                <h2> Flight Number: { this.props.match.params.number }</h2>
                <p><Link to="/">Back Home</Link></p>
            </div>
        )
    }
}

export default Flight;