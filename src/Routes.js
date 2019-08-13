import React from 'react';

// HashRouter is strongly preferred to save headaches with deployment
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'; // HOME PAGE
import Airplanes from './components/Airplanes'; // WIREFRAME 1
import Flights from './components/Flights'; // WIREFRAME 2
import SearchFlight from './components/SearchFlight' // WIREFRAME 3
import SearchNilana from './components/SearchNilana' // TEMPORARY TESTING ONLY
import SearchPaulina from './components/SearchPaulina' // TEMPORARY TESTING ONLY
import Flight from './components/Flight'; // WIREFRAME 4


// Not a functional components. Just a JSX collection
const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/airplanes" component={Airplanes} />
      <Route exact path="/flights" component={Flights} />
      <Route exact path="/search_flight" component={SearchFlight} />
      <Route exact path="/search_nilana" component={SearchNilana} /> { /* TEMP */}
      <Route exact path="/search_paulina" component={SearchPaulina} /> { /* TEMP */}
      <Route path="/flight/:number" component={Flight} />
    </div>
  </Router>
);

export default Routes;