import React from 'react';
import './App.css' 
import Title from './title.js';
import Home from './home.js';
import TackleBox from  './tackle box.js';
import MapPage from './MapPage.js';
import TripsPage from './TripsPage.js';
import Fish from './fish.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



function App() {
  return (
  <Router>
      <Route exact path='/'>
        <Title />
      </Route>

      <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/tacklebox'>
          <TackleBox />
        </Route>
        <Route path='/mappage'>
          <MapPage />
        </Route>
        <Route path ='/fish'>
          <Fish />
        </Route>
        <Route path='/tripspage/:locationId' component={TripsPage} /> 
  </Router>
  ) 
}



export default App;
