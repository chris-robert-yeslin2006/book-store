import React, { use } from 'react'
import '../styles/Home.css'
import  axios from 'axios'
import { useEffect } from 'react'
function Home({setRole}) {
  axios.defaults.withCredentials=true
  useEffect(()=>{
    axios.get('http://localhost:3001/auth/verify')
    .then(res => {
      console.log(res)
      if(res.data.login){
        setRole(res.data.role)
      
      } else {
        setRole('')
      }
    },[])
    .catch(err => {
      console.log(err)
    })
  })
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1 className='hero-title'>Book Store</h1>
            <p className='hero-description'>
                Welcome to the Book Store! Here you can browse through our vast collection of books and enjoy a seamless reading experience.
            </p>
        </div>
        <div className='hero-image'></div>
    </div>
  )
}

export default Home