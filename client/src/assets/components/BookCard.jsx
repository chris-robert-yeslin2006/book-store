import React from 'react'

function BookCard({book}) {
    const {name,imageURL,author}=book;
  return (
    <div className='book-card'>
        <img src={imageURL} alt={name} className='book-image'/>
        <div className="book-details">
            <h3>{name}</h3>
            <p>{author}</p>
        </div>
        <div className="book-actions">
            <button>edit</button>
            <button>delete</button>
        </div>
        
    </div>
  )
}

export default BookCard