import React, { useState } from 'react';
import axios from 'axios';

import BookSearchForm from "../components/bookSearchForm";
import Loader from "../components/loader";
import Bookslist from "../components/booksList";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  let API_URL = "https://www.googleapis.com/books/v1/volumes";

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
    }
    catch(error) {
      setError(true);
    }
    setLoading(false);
  }
  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchBooks();
  }

  return (
    <>
     <BookSearchForm
      onSubmitHandler={onSubmitHandler}
      onInputChange={onInputChange}
      searchTerm={searchTerm}
      error={error}
      />
      <Loader searchTerm={searchTerm} loading={loading} />
      <Bookslist books={books} />
    </>
  );
}

export default SearchPage;