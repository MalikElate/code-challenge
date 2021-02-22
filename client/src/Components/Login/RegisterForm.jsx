import './login.css'; 
import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const RegisterForm = () => {
  const [ name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const history = useHistory(); 
  const dispatch = useDispatch(); 
  return (
    <div className='login-card'>
      <h1>Hello from register form</h1>
      <label>Name</label>
      <input placeholder='name' onChange={(e) => setName(e.target.value)}/>
      <label>Email</label>
      <input placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
      <label>Password</label>
      <input placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => dispatch({type: 'REGISTER_USER', payload: {name: name, email: email, password: password}})}> Register </button>
      <p onClick={() => { history.push('/login') }}>Already have an account? login</p>
    </div>
  );
}

export default RegisterForm;