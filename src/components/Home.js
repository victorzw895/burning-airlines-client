import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    // function to check user is admin or not
    render() {
        // if admin
        return (
          <body id="worldMap">
            <div>
                <h2>This is the Home Page for ADMIN ONLY</h2>
<<<<<<< HEAD
                <p><Link to="/airplanes">View Airplanes</Link></p> {/* PAULINA */ }
                <p><Link to="/flights">View Flights</Link></p> {/* VICTOR */ }
                <img className="planeMoving" src="https://images.vexels.com/media/users/3/145794/isolated/preview/7b344efb846a36f9ed32fbb83d5d59ed-plane-ascending-by-vexels.png" alt="plane"/>
=======
                <p><Link to="/airplanes">View Airplanes</Link></p> {/* PAULINA */}
                <p><Link to="/flights">View Flights</Link></p> {/* VICTOR */}

>>>>>>> 75e24662fe8c358dd10952fade18e57b60d18867
                <h2>This is the PART for USERS</h2>
                <p><Link to="/search_nilana">Search Flights - Nilana</Link></p> {/* NILANA */}
            </div>
            </body>
        )
        // if not admin
        // return (
        //     <div>
        //          <h2>This is the Home Page for user</h2>
        //          <p><Link to="/search">Search Flights</Link></p>
        //          // MAP function to show links for each flight number
        //          <p><Link to="/flight"> flight number </Link></p>
        //     </div>
        // )
    };
}

export default Home;
