import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    // function to check user is admin or not
    render() {
        // if admin
        return (
            // <div>
            //     <h2>This is the Home Page for ADMIN ONLY</h2>
            //     <p><Link to="/airplanes">View Airplanes</Link></p> {/* PAULINA */}
            //     <p><Link to="/flights">View Flights</Link></p> {/* VICTOR */}

            //     <h2>This is the PART for USERS</h2>
            //     <p><Link to="/search_nilana">Search Flights - Nilana</Link></p> {/* NILANA */}
            // </div>


            <div>
                {/* <h2>This is the Home Page for ADMIN ONLY</h2> */}
                <nav>
                    <h1></h1>
                    <a><Link to="/airplanes">View Airplanes</Link></a> {/* PAULINA */}
                    <a ><Link to="/flights">View Flights</Link></a> {/* VICTOR */}
                </nav>

                {/* <h2>This is the PART for USERS</h2> */}
                <h1 className="companyLogo">VPN Airlanes</h1>
                <p ><Link className="searchUser" to="/search_nilana">Search Flights</Link></p> {/* NILANA */}
            </div>
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