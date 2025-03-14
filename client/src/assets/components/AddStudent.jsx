import React from 'react'
import '../styles/Add-Student.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'





function AddStudent() {
    const [roll, setRoll] = useState('')
    const [username, setUsername] = useState('')
    const [grade, setGrade] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
        axios.post('http://localhost:3001/student/register',{
          roll,
          username,
          grade,
          password
        })
        .then( (res)=>{
          console.log(res)
          if(res.data.registered){
            navigate('/dashboard')
          }
        })
      }

  return (
    <div className="add-student-page">
      <div className="add-student-container">
        <h1>Add Student</h1>
        <form onSubmit={handleSubmit}>
          <div className="add-student-form-group">
            <label>Roll No</label>
            <input type="text" className="add-student-input" placeholder="Roll No" onChange={(e) => setRoll(e.target.value)} />
          </div>
          <div className="add-student-form-group">
            <label>Username</label>
            <input type="text" className="add-student-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="add-student-form-group">
            <label>Grade</label>
            <input type="text" className="add-student-input" placeholder="Grade" onChange={(e) => setGrade(e.target.value)} />
          </div>
          
          <div className="add-student-form-group">
            <label>Password</label>
            <input type="password" className="add-student-input" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="add-student-btn">Register</button>
        </form>

      </div>
    </div>
  )
}

export default AddStudent
