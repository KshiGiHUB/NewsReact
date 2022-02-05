import React from 'react';
import './App.css';
//import Fake from './Components/Fake';
import Nav from './Components/Nav';
import News from './Components/News';
import Spinner from './Components/Spinner';
//import Dark from './Components/Dark';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from "react-router-dom"; 

function App() {

  return <div>
    <Router>
    <Nav />
    <Spinner/>
    <Switch>
      <Route exact path="/"><News key='General'category='General' pagesize='3' country='in' /></Route>
      <Route exact path="/Home"><News key='General'category='General' pagesize='3' country='in' /></Route>
      <Route exact path="/Science"><News key='Science' category='Science' pagesize='3' country='in' /></Route>
      <Route exact path="/Health"><News key='Health' category='Health' pagesize='3' country='in' /></Route>
      <Route exact path="/Technology"><News key='Technology' category='Technology' pagesize='3' country='in' /></Route>
      <Route exact path="/Sports"><News key='Sports' category='Sports' pagesize='3' country='in' /></Route>
      <Route exact path="/Entertainment"><News key='Entertainment' category='Entertainment' pagesize='3' country='in' /></Route>
      <Route exact path="/Business"><News key='Business' category='Business' pagesize='3' country='in' /></Route>
    </Switch>
    </Router>
  </div>


}
export default App;
//483fcb320b724cc5a25127a9e4409a10