import React from 'react'
import {Link} from 'react-router-dom'

function BookCard({book,role}) {
    const {name,imageURL,author}=book;
  return (
    <div className='book-card'>
        <img src={imageURL} alt={name} className='book-image'/>
        <div className="book-details">
            <h3>{name}</h3>
            <p>{author}</p>
        </div>
        {role==='admin' &&
        <div className="book-actions">
        <button><Link to={`/book/${book._id}`}>edit</Link></button>
        <button><Link to={`/delete/${book._id}`}>delete</Link></button>
        
    </div>}
        
        
        
        
    </div>
  )
}

export default BookCard