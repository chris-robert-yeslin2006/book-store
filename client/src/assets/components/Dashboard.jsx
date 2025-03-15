import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/DashBoard.css'
import { set } from 'mongoose'

function Dashboard() {
  const [students, setStudents] = useState(0)
  const [books, setBooks] = useState(0)
  const [admin, setAdmin] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3001/dashboard')
    .then(res => {
      if(res.data.ok){
        setStudents(res.data.students)
        setBooks(res.data.books)
        setAdmin(res.data.admin)
        console.log(res)
      }
    }).catch(err => {
      console.log(err)
    })
  },[])
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <div className="dashboard-table">
        <div className="dashboard-row">
          <div className="dashboard-label">Total Students</div>
          <div className="dashboard-value">{students}</div>
        </div>
        <div className="dashboard-row">
          <div className="dashboard-label">Total Books</div>
          <div className="dashboard-value">{books}</div>
        </div>
        <div className="dashboard-row">
          <div className="dashboard-label">Total Admins</div>
          <div className="dashboard-value">{admin}</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard