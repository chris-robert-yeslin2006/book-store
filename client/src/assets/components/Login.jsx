import React from 'react'
import '../styles/Login.css'

function Login() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [role, setRole] = React.useState('student')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password, role)
  }
  return (
    <div className='login-page'>
      <div className="login-container">
        <h1>Login</h1><br />
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username" 
          onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password"
          onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="role">role</label>
          <select name="role" id="role" className="form-control"
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