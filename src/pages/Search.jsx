import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { FaChevronLeft } from 'react-icons/fa';

import Helmet from '../components/Helmet';
import Grid from '../components/Grid';
import Section from '../components/Section';
import Book from '../components/Book';

import * as BookAPI from '../utils/BooksAPI';

const Search = () => {
  const { changeShelf } = useGlobalContext();
  const [search, setSearch] = useState('');
  const [booksSearch, setBooksSearch] = useState([]);
  const [showSearchPage, setshowSearchPage] = useState(false);

  const searchText = useRef('');

  useEffect(() => searchText.current.focus(), []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
    handleBookSearch(search);
  };

  const handleBookSearch = async (query) => {
    if (query.length > 0) {
      BookAPI.search(query)
        .then((res) => {
          if (res.error) {
            setBooksSearch([]);
          } else {
            setBooksSearch(res);
            setshowSearchPage(true);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setBooksSearch([]);
    }
  };

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
              onChange={handleSearch}
              ref={searchText}
            />
          </div>
        </div>
        <Section>
          <Grid col={5} md={3} sm={2} gap={20}>
            {showSearchPage ? (
              booksSearch.map((book) => (
                <Book key={book.id} {...book} changeShelf={changeShelf} />
              ))
            ) : (
              <p className='text-center'>No Result</p>
            )}
          </Grid>
        </Section>
      </div>
    </Helmet>
  );
};

export default Search;
