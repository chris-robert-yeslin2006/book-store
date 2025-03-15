
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar({role}) {
  return (
    <nav className='navbar'>
        <div className='left-nav'>
            <Link to='/'><span>Book Store</span></Link>
        </div>
        <div className='right-nav'>

            <Link to='/books'>books</Link>

            {role === 'admin' && <>
              <Link to='/addbooks' >Add Books</Link>
              <Link to='/addstudent'>Add student</Link>
              {/* <Link to='/dashboard'>dashboard</Link> */}
            </>
            
            }
            {role=='' ?
            <Link to='/login'>login</Link>
            :
            <Link to='/logout'>logout</Link> 
          }
            
            
        </div>
    </nav>
  )
}

export default Navbar