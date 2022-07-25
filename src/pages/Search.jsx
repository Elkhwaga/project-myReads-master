import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { FaChevronLeft } from 'react-icons/fa';

import Helmet from '../components/Helmet';
import Grid from '../components/Grid';
import Section from '../components/Section';
import Book from '../components/Book';

const Search = (props) => {
  const {
    query,
    setQuery,
    submergedBooks,
    changeSelf,
    showSearchPage,
    textMessage,
  } = useGlobalContext();

  const searchText = useRef('');

  useEffect(() => searchText.current.focus(), []);

  return (
    <Helmet title='Search'>
      <div className='search'>
        <div className='search-books-bar'>
          <Link to='/' className='close'>
            <FaChevronLeft size={22} />
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title, author, or ISBN'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              ref={searchText}
            />
          </div>
        </div>
        <Section>
          <Grid col={5} md={3} sm={2} columnGap={20} rowGap={40}>
            {showSearchPage ? (
              submergedBooks.map((book) => (
                <Book key={book.id} book={book} changeSelf={changeSelf} />
              ))
            ) : (
              <p className='text-center'>{textMessage}</p>
            )}
          </Grid>
        </Section>
      </div>
    </Helmet>
  );
};

export default Search;
