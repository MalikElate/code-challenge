import './App.css';
import React from 'react'; 
import { HashRouter as Router, Route } from 'react-router-dom';
// Components 
import Nav from '../Nav/Nav.jsx'; 
import Landing from '../Landing/Landing'; 
import LoginForm from '../Login/LoginForm'; 
import RegisterForm from '../Login/RegisterForm'; 
import TaskPage from '../Tasks/TaskPage'; 

function App() {
  return (
    <Router> 
      <Nav/>
      <div className='app'>
        <Route exact path='/' component={Landing}></Route>
        <Route path='/login' component={LoginForm}></Route>
        <Route path='/register' component={RegisterForm}></Route>
        <Route path='/tasks' component={TaskPage}></Route>
      </div>
    </Router>
  );
}

export default App;
