import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Logout({setRole}) {
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3001/auth/logout')
    .then(res => {
        console.log(res)
        setRole('')
        navigate('/')
    }
    ).catch(err => {
        console.log(err)
    })
}, [])

  
}

export default Logout