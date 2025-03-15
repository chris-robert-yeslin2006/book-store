import React, { use } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import BookCard from './BookCard'
import '../styles/Books.css'

function Books() {
  const [books, setBooks] = useState([])  
  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
    .then(res => {
      console.log(res.data)
      setBooks(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className='books-page'>
      {
        books.map(book => {
          return <BookCard key={book._id} book={book} />
        })
      }
    </div>
  )
}

export default Books