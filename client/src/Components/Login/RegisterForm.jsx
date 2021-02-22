import './login.css'; 
import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const RegisterForm = () => {
  const [ name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const [ confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory(); 
  const dispatch = useDispatch(); 
  return (
    <div className='login-card'> 
      <h1>Register</h1>
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
      <label>Confirm Password</label>
      <input className='text-input' onChange={(e) => setConfirmPassword(e.target.value)}/>
    </div>
    <div className='login-card-div'>
      <button className='register-btn' onClick={() => dispatch({type: 'REGISTER_USER', payload: 
        {name: name, email: email, password: password, confirmPassword: confirmPassword}
      })}> Register </button>
    </div>
      <p onClick={() => { history.push('/login') }} className='login-question-p'>Already have an account? login</p>
    </div>
  );
}

export default RegisterForm;