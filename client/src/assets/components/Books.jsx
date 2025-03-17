import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import '../styles/Books.css';


function Books({ role }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="books-layout">
      <div className="books-list">
        {books.map(book => (
          <BookCard
            key={book._id}
            book={book}
            role={role}
            onShowDescription={() => setSelectedBook(book)}
          />
        ))}
      </div>

      <div className="book-description-panel">
        {selectedBook ? (
          <>
            <img src={selectedBook.imageURL} alt={selectedBook.name} className="desc-book-image" />
            <h2>{selectedBook.name}</h2>
            <p><strong>Author:</strong> {selectedBook.author}</p>
            <p><strong>Description:</strong> {selectedBook.description}</p>
          </>
        ) : (
          <div className="desc-placeholder">
            <img src="/book-placeholder.jpg" alt="Select a Book" />
            <p>Select a book to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;
