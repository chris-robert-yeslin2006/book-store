import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete(`http://localhost:3001/book/book/${id}`)
      .then((res) => {
        console.log('Deleted response:', res.data);
        if (res.data.deleted) {
          navigate('/books');
        }
      })
      .catch((err) => {
        console.error('Error deleting book:', err);
        navigate('/books'); // fallback in case of error
      });
  }, [id, navigate]);

  return (
    <div className="p-4 text-center">
      <p>Deleting book, please wait...</p>
    </div>
  );
}

export default DeleteBook;
