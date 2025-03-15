import React, { useEffect, useState } from 'react'
import '../styles/Add-Student.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditBooks() {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [imageURL, setImageURL] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  // ✅ Fetch existing book details
  useEffect(() => {
    axios.get(`http://localhost:3001/book/book/${id}`)
      .then((res) => {
        const book = res.data
        setName(book.name)
        setAuthor(book.author)
        setImageURL(book.imageURL)
      })
      .catch((err) => console.error("Error fetching book:", err))
  }, [id])

  // ✅ Submit updated data (PUT request)
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3001/book/book/${id}`, {
      name,
      author,
      imageURL
    })
      .then((res) => {
        console.log("Updated:", res.data)
        navigate('/books')
      })
      .catch((err) => console.error("Update error:", err))
  }

  return (
    <div className="add-student-page">
      <div className="add-student-container">
        <h1>Edit Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="add-student-form-group">
            <label>Book Name</label>
            <input
              type="text"
              className="add-student-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Book name"
            />
          </div>
          <div className="add-student-form-group">
            <label>Author</label>
            <input
              type="text"
              className="add-student-input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
            />
          </div>
          <div className="add-student-form-group">
            <label>Image URL</label>
            <input
              type="text"
              className="add-student-input"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              placeholder="Image URL"
            />
          </div>
          <button type="submit" className="add-student-btn">Update Book</button>
        </form>
      </div>
    </div>
  )
}

export default EditBooks
