import React, { useState } from 'react'
import '../styles/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login({ setRole: setAppRole }) {
  const [role, setLocalRole] = useState('student')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [popupMsg, setPopupMsg] = useState('')
  const [popupType, setPopupType] = useState('') // 'success' or 'error'

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.defaults.withCredentials = true
    axios.post('http://localhost:3001/auth/login', { username, password, role })
      .then(res => {
        if (res.data.login && res.data.role === 'admin') {
          setAppRole('admin')
          setPopupType('success')
          setPopupMsg('Login successful as Admin!')
          setTimeout(() => {
            setPopupMsg('')
            navigate('/books')
          }, 1500)
        } else if (res.data.login && res.data.role === 'student') {
          setAppRole('student')
          setPopupType('success')
          setPopupMsg('Login successful as Student!')
          setTimeout(() => {
            setPopupMsg('')
            navigate('/')
          }, 1500)
        } else {
          setPopupType('error')
          setPopupMsg('Invalid credentials!')
          setTimeout(() => setPopupMsg(''), 2000)
        }
      })
      .catch(() => {
        setPopupType('error')
        setPopupMsg('Login request failed!')
        setTimeout(() => setPopupMsg(''), 2000)
      })
  }

  return (
    <div className='login-page'>
      <div className="login-container">
        <h1>Login</h1><br />
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            className="form-control"
            value={role}
            onChange={(e) => setLocalRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>

        {popupMsg && (
          <div className={`login-popup ${popupType}`}>
            {popupMsg}
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
