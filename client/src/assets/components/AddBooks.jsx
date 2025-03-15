import React from 'react'
import '../styles/Add-Student.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'





function AddBooks() {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageURL, setImageURL] = useState('')
    
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
        axios.post('http://localhost:3001/book/add',{
            name,
            author,
            imageURL
        })
        .then( (res)=>{
          console.log(res)
          if(res.data.added){
            navigate('/books')
          }
          else{
            console.log(res)
          }
        //   console.log(res)
        })
      }

  return (
    <div className="add-student-page">
      <div className="add-student-container">
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="add-student-form-group">
            <label> Book Name</label>
            <input type="text" className="add-student-input" placeholder="name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="add-student-form-group">
            <label>Author</label>
            <input type="text" className="add-student-input" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
          </div>
         
          <div className="add-student-form-group">
            <label>Image URL</label>
            <input type="text" className="add-student-input" placeholder="Image URL" onChange={(e) => setImageURL(e.target.value)} />
          </div>
            
          
         
          <button type="submit" className="add-student-btn">Add</button>
        </form>

      </div>
    </div>
  )
}

export default AddBooks;
