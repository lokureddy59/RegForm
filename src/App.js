import React from 'react';
import './App.css';
import CommunicationDetails from './components/CommunicationDetails';
import PersonalDetails from './components/PersonalDetails';
import CardDetails from './components/CardDetails';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>

        <div >

          <Switch>

            <Route exact path="/"><PersonalDetails /></Route>
            <Route exact path="/cd"><CommunicationDetails /></Route>
            <Route exact path="/cad"><CardDetails /></Route>



          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
