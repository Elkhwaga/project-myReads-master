import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { FaChevronLeft } from 'react-icons/fa';

import Helmet from '../components/Helmet';
import Grid from '../components/Grid';
import Section from '../components/Section';
import BookSearch from '../components/BookSearch';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Search = (props) => {
  const {
    query,
    setQuery,
    submergedBooks,
    changeShelf,
    showSearchPage,
    textMessage,
    loading,
  } = useGlobalContext();

  const searchText = useRef('');

  useEffect(() => searchText.current.focus(), []);

  if (loading) return <Loader />;
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
                <BookSearch
                  key={book.id}
                  book={book}
                  changeShelf={changeShelf}
                />
              ))
            ) : (
              <p className='text-center message'>{textMessage}</p>
            )}
          </Grid>
        </Section>
      </div>
      <Footer color='#17252a' />
    </Helmet>
  );
};

export default Search;
