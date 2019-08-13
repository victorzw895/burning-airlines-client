import React from 'react';

// HashRouter is strongly preferred to save headaches with deployment
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Airplanes from './components/Airplanes';
import Flights from './components/Flights';
import SearchFlight from './components/SearchFlight'
import SearchNilana from './components/SearchNilana' // TEMPORARY TESTING ONLY
import SearchPaulina from './components/SearchPaulina' // TEMPORARY TESTING ONLY
import Flight from './components/Flight';

// Not a functional components. Just a JSX collection
const Routes = (
  <Router>
      <div>
          <Route exact path="/" component={ Home } />
          <Route exact path="/airplanes" component={ Airplanes } />
          <Route exact path="/flights" component={ Flights } />
          <Route exact path="/search_flight" component={ SearchFlight } />
          <Route exact path="/search_nilana" component={ SearchNilana } /> { /* TEMP */ }
          <Route exact path="/search_paulina" component={ SearchPaulina } /> { /* TEMP */ }
          <Route path="/flight/:number" component={ Flight } />
      </div>
  </Router>
);

export default Routes;