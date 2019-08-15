// FOR LAST WIREFRAME 4

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const SERVER_URL = 'http://localhost:3000/airplanes.json';
// const SERVER_URL = 'http://18649033.ngrok.io/airplanes.json';

class Flight extends Component {
    render() {
        return (
            <div>
              <h2> Flight Number: { this.props.match.params.number }</h2>
              <h3> Select seat:</h3>
              <Seats number={this.props.match.params.number}/>

              {/*
//
//                 <h3> Select a seat</h3>
//                     <h2><i class="fas fa-user"></i></h2>
//                 <div className="container">
//       <form className='seating' onSubmit={this.selectSeat}>
//       <button id="A6" className="seat" onClick={this.changeHandler}>A6</button>
//       <button id="A5" className="seat" onClick={this.changeHandler}>A5</button>
//       <button id="A4" className="seat" onClick={this.changeHandler}>A4</button>
//
//       <button id="A3" className="seat" onClick={this.changeHandler}>A3</button>
//       <button id="A2" className="seat" onClick={this.changeHandler}>A2</button>
//       <button id="A1" className="seat" onClick={this.changeHandler}>A1
// </button>
//       <button className="seat-button">book sit</button>
//       </form>
//       </div> */}

                <p><Link to="/">Back Home</Link></p>

              </div>

        )
    }
}

class Seats extends Component {
    constructor(){
      super();
      this.state={
        // rows: [],
        // columns: [],
        rows: 0,
        columns: 0,
        seats: []


      }

      const fetchSeats = () => {
        axios.get(SERVER_URL).then((result) => {
          console.log(result.data);
          console.log(result.data[0].row);
          console.log(Number(result.data[0].columns));
          console.log(this.props.number);
          const plane = result.data.filter((p) => p.planeNo === Number(this.props.number))
          const r = plane[0].row;
          const c =  Number(plane[0].columns);
        //   this.setState({rows: Array(r).fill(null), columns: Array(c).fill(null), seats: Array(r*c).fill(null) })
          this.setState({rows: r, columns: c, seats: Array(r*c).fill(null) })
        }
      )
      }
      fetchSeats();
    }

    renderSeats = (rows, columns) => {
      const r = rows;
      const c = columns;
      let table = [];
      for (let i = 0; i < r; i++) {
        let rows = [];
        for (let j = 0; j < c; j++) {
          rows.push(<button className="columns">👨</button>)
        }
        table.push(<div className="row">{rows}</div>)
      }
      return (
        <div className="board-row">{table}</div>
      )
    }

      render() {
        return (
          <div>
            <h1>hi</h1>
            {this.renderSeats(this.state.rows, this.state.columns)}
            {/* {this.state.rows.map((r) => <div className="board-row"> <button> [   ]</button></div>)} */ }
          </div>

        )

      }
}

export default Flight;
