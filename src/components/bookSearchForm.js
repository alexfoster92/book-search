import React from 'react';

const BookSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        <span>Books & Books</span>
        <input
          type="search"
          placeholder="Search for a book title"
          value={searchTerm}
          onChange={onInputChange}
          required
        />
        <button type="submit">Search</button>
      </label>
      {error && (
        <div style={{ color: `red` }}>
          An error occurred while fetching the API
        </div>
      )}
    </form>
  );
};

export default BookSearchForm;