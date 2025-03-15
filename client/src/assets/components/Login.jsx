import React from 'react'
import '../styles/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// function Login({setRole}) {
//   const [username, setUsername] = React.useState('')
//   const [password, setPassword] = React.useState('')
//   const [role, setRole] = React.useState('')
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(username, password, role)
//     axios.defaults.withCredentials = true
//     axios.post('http://localhost:3001/auth/login', {username, password, role})
//     .then(res => {
//       console.log(res)
//       if(res.data.login && res.data.role === 'admin'){
//         setRole('admin')
//         navigate('/dashboard')
//       } else if(res.data.login && res.data.role === 'student'){
//         setRole('student')
//         navigate('/')
//       } else {
//         console.log('Login failed')
//       }
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }

//   return (
//     <div className='login-page'>
//       <div className="login-container">
//         <h1>Login</h1><br />
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input type="text" className="form-control" id="username" placeholder="Enter username" 
//           onChange={(e) => setUsername(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" className="form-control" id="password" placeholder="Password"
//           onChange={(e)=> setPassword(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="role">role</label>
//           <select name="role" id="role" className="form-control" value={role}
//           onChange={(e)=> setRole(e.target.value)}>
//             <option value="admin">Admin</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
//       </div>
//     </div>
//   )
// }

// export default Login


function Login({ setRole: setAppRole }) {
  const [role, setLocalRole] = React.useState('student')
  const [username, setUsername] = React.useState('')
   const [password, setPassword] = React.useState('')
  
   const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password, role)
    axios.defaults.withCredentials = true
    axios.post('http://localhost:3001/auth/login', { username, password, role })
      .then(res => {
        console.log(res)
        if (res.data.login && res.data.role === 'admin') {
          setAppRole('admin') // Update global role
          navigate('/books')
        } else if (res.data.login && res.data.role === 'student') {
          setAppRole('student') // Update global role
          navigate('/')
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
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select name="role" id="role" className="form-control" value={role}
          onChange={(e) => setLocalRole(e.target.value)}> {/* Change here */}
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

