import React from 'react';
import { Link } from 'react-router-dom';

const Book = (book) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <img src={book.imageLinks && book.imageLinks.thumbnail} alt='' />
        <div className='book-shelf-changer'>
          <select
            onChange={(e) => {
              console.log(e.target.value);
              book.changeShelf(book, e.target.value);
            }}
            value={book.category ? book.category : 'none'}
          >
            <option value='none' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-info'>
        <div className='book-title'>
          <Link to={`/books/${book.id}`}>
            <span>{book.title}</span>
          </Link>
        </div>
        <h5 className='book-authors'>author: {book.authors}</h5>
        <p className='book-language'>language: {book.language}</p>
        <span>pages: {book.pageCount}</span>
      </div>
    </div>
  );
};

export default Book;
