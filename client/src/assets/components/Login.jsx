import React from 'react'
import '../styles/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [role, setRole] = React.useState('student')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password, role)
    axios.defaults.withCredentials = true
    axios.post('http://localhost:3001/auth/login', {username, password, role})
    .then(res => {
      console.log(res)
      if(res.data.login && res.data.role === 'admin'){
        navigate('/dashboard')
      } else if(res.data.login && res.data.role === 'student'){
        navigate('/student')
      } else {
        console.log('Login failed')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='login-page'>
      <div className="login-container">
        <h1>Login</h1><br />
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username" 
          onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password"
          onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="role">role</label>
          <select name="role" id="role" className="form-control" value={role}
          onChange={(e)=> setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login
