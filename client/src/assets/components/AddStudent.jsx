import React, { useState } from 'react'
import '../styles/Add-Student.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddStudent() {
  const [roll, setRoll] = useState('')
  const [username, setUsername] = useState('')
  const [grade, setGrade] = useState('')
  const [password, setPassword] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3001/student/register', {
      roll,
      username,
      grade,
      password
    }, { withCredentials: true })
      .then((res) => {
        if (res.data.registered) {
          setSuccessMessage('✅ Student added successfully!')
          setErrorMessage('')
          setTimeout(() => {
            setSuccessMessage('')
            navigate('/dashboard')
          }, 2000)
        } else {
          setSuccessMessage('')
          setErrorMessage('❌ Failed to register student.')
        }
      })
      .catch((err) => {
        console.error('Error:', err)
        const errorText = err?.response?.data?.message || 'Something went wrong!'
        setSuccessMessage('')
        setErrorMessage(`❌ ${errorText}`)
        setTimeout(() => {
          setErrorMessage('')
        }, 3000)
      })
  }

  return (
    <div className="add-student-page">
      <div className="add-student-container">
        <h1>Add Student</h1>

        {successMessage && (
          <div className="success-popup">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="error-popup">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="add-student-form-group">
            <label>Roll No</label>
            <input
              type="text"
              className="add-student-input"
              placeholder="Roll No"
              onChange={(e) => setRoll(e.target.value)}
              required
            />
          </div>
          <div className="add-student-form-group">
            <label>Username</label>
            <input
              type="text"
              className="add-student-input"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="add-student-form-group">
            <label>Grade</label>
            <input
              type="text"
              className="add-student-input"
              placeholder="Grade"
              onChange={(e) => setGrade(e.target.value)}
              required
            />
          </div>
          <div className="add-student-form-group">
            <label>Password</label>
            <input
              type="password"
              className="add-student-input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="add-student-btn">Register</button>
        </form>
      </div>
    </div>
  )
}

export default AddStudent
