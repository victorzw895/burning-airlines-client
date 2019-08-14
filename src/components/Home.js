import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    // function to check user is admin or not
    render() {
        // if admin
        return (
          <body id="worldMap">
            <div>
                <h1 id="anima_text">Burning Airlines</h1>
                <h2>This is the Home Page for ADMIN ONLY</h2>
                <p><Link to="/airplanes">View Airplanes</Link></p> {/* PAULINA */ }
                <p><Link to="/flights">View Flights</Link></p> {/* VICTOR */ }
<<<<<<< HEAD
                <img className="planeMoving" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Silhouette_An-124.svg/1024px-Silhouette_An-124.svg.png" alt="plane"/>

                <p><Link to="/airplanes">View Airplanes</Link></p> {/* PAULINA */}
                <p><Link to="/flights">View Flights</Link></p> {/* VICTOR */}

=======
                <img className="planeMoving" src="https://images.vexels.com/media/users/3/145794/isolated/preview/7b344efb846a36f9ed32fbb83d5d59ed-plane-ascending-by-vexels.png" alt="plane"/>
>>>>>>> 63eeba126d30f78f309a75e2f8c783819b16af68
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
