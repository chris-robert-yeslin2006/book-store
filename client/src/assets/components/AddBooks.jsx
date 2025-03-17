// AddBooks.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Add-Student.css';

function AddBooks() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/book/add', {
      name,
      author,
      imageURL,
      description,
    })
    .then((res) => {
      if (res.data.added) navigate('/books');
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className="add-student-page">
      <div className="add-student-container">
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="add-student-form-group">
            <label>Book Name</label>
            <input type="text" placeholder="name" className="add-student-input" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="add-student-form-group">
            <label>Author</label>
            <input type="text" placeholder="Author" className="add-student-input" onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className="add-student-form-group">
            <label>Image URL</label>
            <input type="text" placeholder="Image URL" className="add-student-input" onChange={(e) => setImageURL(e.target.value)} />
          </div>
          <div className="add-student-form-group">
            <label>Description</label>
            <textarea placeholder="Description" className="add-student-input" onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type="submit" className="add-student-btn">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;
