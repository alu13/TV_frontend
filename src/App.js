//import logo from './logo.svg';
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import NgoForm from './components/NgoForm'
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Opportunities from './components/Opportunities';
import OpportunityDetails from './components/OpportunityDetails';

function App() {
  
  return (
      <Router>
      <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path= "/home" component={Home}/>
        <Route exact path = "/opportunities/:query" component={Opportunities}/>
        <Route exact path = "/opportunity/:id" component = {OpportunityDetails}/>
        <Route exact path = "/form" component = {NgoForm}/>
        <Route exact path = "/">
          <Home/>
        </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
