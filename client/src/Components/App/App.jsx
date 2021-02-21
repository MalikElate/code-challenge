import './App.css';
import React from 'react'; 
import { HashRouter as Router, Route } from 'react-router-dom';
// Components 
import LoginForm from '../LoginForm/LoginForm'; 
import Landing from '../Landing/Landing'; 
import Nav from '../Nav/Nav.jsx'; 

function App() {
  return (
    <Router> 
      <Nav/>
      <Route exact path="/" component={Landing}></Route>
      <Route path="/login" component={LoginForm}></Route>
      {/* <Route path="/plants" component={Plants}></Route> */}
  </Router>
  );
}

export default App;
