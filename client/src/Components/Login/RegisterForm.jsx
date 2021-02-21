import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
  const [ name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const history = useHistory(); 
  return (
    <div>
      <h1>Hello from register form</h1>
      <label>Name</label>
      <input placeholder='name' onChange={(e) => setName(e.target.value)}/>
      <label>Email</label>
      <input placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
      <label>Password</label>
      <input placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => console.log(name, email, password)}>Login</button>
      <p onClick={() => { history.push('/login') }}>already have and account? login</p>
      
    </div>
  );
}

export default LoginForm;