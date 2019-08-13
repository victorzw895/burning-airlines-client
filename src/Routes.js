import React from 'react';

// HashRouter is strongly preferred to save headaches with deployment
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Airplanes from './components/Airplanes';
import Flights from './components/Flights';
import SearchFlight from './components/SearchFlight'
import Flight from './components/Flight';

// Not a functional components. Just a JSX collection
const Routes = (
  <Router>
      <div>
          <Route exact path="/" component={ Home } />
          <Route exact path="/airplanes" component={ Airplanes } />
          <Route exact path="/flights" component={ Flights } />
          <Route exact path="/search_flight" component={ SearchFlight } />
          <Route path="/flight/:number" component={ Flight } />
      </div>
  </Router>
);

export default Routes;