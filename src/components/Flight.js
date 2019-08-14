// FOR LAST WIREFRAME 4

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Flight extends Component {
    render() {
        return (
            <div>

                <h2> Flight Number: { this.props.match.params.number }</h2>

                <h3> Select a seat</h3>
                    <h2><i class="fas fa-user"></i></h2>
                <div className="container">
      <form className='seating' onSubmit={this.selectSeat}>
      <button id="A6" className="seat" onClick={this.changeHandler}>A6</button>
      <button id="A5" className="seat" onClick={this.changeHandler}>A5</button>
      <button id="A4" className="seat" onClick={this.changeHandler}>A4</button>

      <button id="A3" className="seat" onClick={this.changeHandler}>A3</button>
      <button id="A2" className="seat" onClick={this.changeHandler}>A2</button>
      <button id="A1" className="seat" onClick={this.changeHandler}>A1
</button>
      <button className="seat-button">book sit</button>
      </form>
      </div>

                <p><Link to="/">Back Home</Link></p>

                </div>

        )
    }
}

export default Flight;
