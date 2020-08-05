import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import BookDetail from "../components/bookDetail";

const BookDetailPage = ({ match }) => {
    const {
      params: { bookId },
    } = match;
    const [book, setBook] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
      const fetchBook = async () => {
        setLoading(true);
        setError(false);
        try {
          const result = await axios.get(`${API_BASE_URL}/${bookId}`);
          setBook(result.data);
        } catch (error) {
          setError(true);
        }
        setLoading(false);
      };

      fetchBook();
    }, [bookId]);

    return (
        <>
          <Link to={`/`}>Go back to book search</Link>
          {loading && (
            <div style={{ color: `green` }}>
              Loading book details for: <strong>{bookId}</strong>
            </div>
          )}
          {error && (
            <div style={{ color: `red` }}>
              An error occurred while fetching the API
            </div>
          )}
          {book && <BookDetail book={book} />}
        </>
      );
    };
    
    export default BookDetailPage;