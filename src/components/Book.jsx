import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book, changeSelf }) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <img src={book.imageLinks && book.imageLinks.thumbnail} alt='' />
        <div className='book-shelf-changer'>
          <select
            defaultValue={book.shelf ? book.shelf : 'none'}
            onChange={(e) => changeSelf(book, e.target.value)}
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
            <span>author: {book.authors}</span>
          </Link>
        </div>
        <p>shelf: {book.shelf ? book.shelf : 'none'}</p>
      </div>
    </div>
  );
};

export default Book;
