import './login.css'; 
import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom'
 
const LoginForm = () => {
  const [ name, setName] = useState(''); 
  const [ email, setEmail] = useState(''); 
  const [ password, setPassword] = useState(''); 
  const history = useHistory(); 
  return (
    <div className='login-card'>
      <h1>Login</h1>
      <div className='login-card-div'>
        <label>Name</label>
        <input className='text-input' onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className='login-card-div'> 
        <label>Email</label>
        <input className='text-input' onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='login-card-div'>
        <label>Password</label>
        <input className='text-input' onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className='login-card-div'>
        <button className='register-btn' onClick={() => console.log(name, email, password)}>Login</button>
      </div>
      <p onClick={() => { history.push('/register') }}>Need to create and account? register</p>
    </div>
  );
}

export default LoginForm;