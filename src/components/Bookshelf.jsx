import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import Grid from './Grid';
import Loading from './Loader';

import { useGlobalContext } from '../context';

const Bookshelf = (props) => {
  const { books, loading, changeShelf } = useGlobalContext();
  const booksCategory = books.filter((book) => book.shelf === props.category);

  if (loading) return <Loading />;

  return (
    <div className='bookshelf'>
      <h3 className='bookshelf-title'>{props.title}</h3>
      <div className='bookshelf-books'>
        <div className='books-grid'>
          <Grid col={5} mdCol={3} smCol={2} gap={20}>
            {booksCategory.map((item) => (
              <Book key={item.id} {...item} changeShelf={changeShelf} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
};

export default Bookshelf;
