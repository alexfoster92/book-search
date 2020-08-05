import React from 'react';
import { Link } from "react-router-dom";
import { bookAuthors } from '../utils';

const Book = ({ book }) => {
    return (
        <li>
            <div class="book-card">
            <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                <div class="book-info">
                    <h3>{ book.volumeInfo.title }</h3>
                    <p>{ bookAuthors(book.volumeInfo.authors) }</p>
                    <p>{book.volumeInfo.publishedDate}</p>
                    <Link to={`/book/${book.id}`}>Show details</Link>
                </div>
            </div>
            <hr />
        </li>
    )
};

const BooksList = ({ books }) => {
    return (
        <ul>
        {
          books.items.map((book, index) => {
            return (
                <Book book={book} key={index} />
            );
          })
        }
      </ul>
    );
};

export default BooksList;