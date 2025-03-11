import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='left-nav'>
            <Link to='/'><span>Book Store</span></Link>
        </div>
        <div className='right-nav'>
            <Link to='/books'>books</Link>
            <Link to='/login'>login</Link>
        </div>
    </nav>
  )
}

export default Navbar