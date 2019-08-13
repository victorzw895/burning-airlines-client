import React from 'react';

// HashRouter is strongly preferred to save headaches with deployment
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Airplanes from './components/Airplanes';
import Flights from './components/Flights';

// Not a functional components. Just a JSX collection
const Routes = (
  <Router>
      <div>
          <Route exact path="/" component={ Home } />
          <Route exact path="/airplanes" component={ Airplanes } />
          <Route path="/flights/:number" component={ Flights } />
      </div>
  </Router>
);

export default Routes;