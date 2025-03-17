import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book, role, onShowDescription }) {
  const { name, imageURL, author } = book;

  return (
    <div className="book-card">
      <img src={imageURL} alt={name} className="book-image" />
      <div className="book-details">
        <h3>{name}</h3>
        <p>{author}</p>
      </div>

      <div className="book-actions">
        <button onClick={onShowDescription} className='desc-btn'>Show Description</button>
        {role === 'admin' && (
          <>
            <button id='edit-btn' className="edit-btn">
  <Link to={`/book/${book._id}`}>Edit</Link>
</button>

<button id='delete-btn' className="delete-btn">
  <Link to={`/delete/${book._id}`}>Delete</Link>
</button>

          </>
        )}
      </div>
    </div>
  );
}

export default BookCard;
