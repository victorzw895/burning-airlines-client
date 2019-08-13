import React, { Component } from 'react';

class Flight extends Component {
    render() {
        return (
            <div>
                <h2> Flight Number: { this.props.match.params.number }</h2>
            </div>
        )
    }
}

export default Flight;