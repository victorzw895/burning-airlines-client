import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Admin from './Admin';



class Home extends Component {
    // function to check user is admin or not
    render() {
        // if admin
        return (
            <>

                <Navigation />

                <div id="worldMap">
                    <div>
                        <h1 id="anima_text">Burning Airlines</h1>

                        <img className="planeMoving" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Silhouette_An-124.svg/1024px-Silhouette_An-124.svg.png" alt="plane" />

                        {/* <h2>This is the PART for USERS</h2> */}
                        {/* <h1 className="companyLogo">VPN Airlanes</h1> */}

                    </div>
                </div >
            </>
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
