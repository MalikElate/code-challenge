import './login.css'; 
import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
 
const LoginForm = () => {
  const [ email, setEmail] = useState(''); 
  const [ password, setPassword] = useState(''); 
  const history = useHistory(); 
  const dispatch = useDispatch()
  return (
    <div className='login-card'>
      <h1>Login</h1>
      <div className='login-card-div'> 
        <label>Email</label>
        <input className='text-input' onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='login-card-div'>
        <label>Password</label>
        <input className='text-input' onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className='login-card-div'>
        <button className='register-btn' onClick={() => dispatch({type: 'LOGIN_USER', payload: {email: email, password: password}})}><b>Login</b></button>
      </div>
      <p onClick={() => { history.push('/register') }}>Need to create an account? register</p>
    </div>
  );
}

export default LoginForm;