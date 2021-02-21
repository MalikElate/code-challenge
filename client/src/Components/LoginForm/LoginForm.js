import { useState } from 'react'; 

const LoginForm = () => {
  const [ name, setName] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  return (
    <div>
      <label>Name</label>
      <input placeholder='name' onChange={(e) => setName(e.target.value)}/>
      <label>Email</label>
      <input placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
      <label>Password</label>
      <input placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => console.log(name, email, password)}>Login</button>
    </div>
  );
}

export default LoginForm;