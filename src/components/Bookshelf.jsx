import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import Grid from './Grid';
// import Loading from './Loader';

const Bookshelf = ({ books, title, changeShelf }) => {
  // if (loading) return <Loading />;

  return (
    <div className='bookshelf'>
      <h3 className='bookshelf-title'>{title}</h3>
      <div className='bookshelf-books'>
        <div className='books-grid'>
          <Grid col={5} mdCol={3} smCol={2} columnGap={20} rowGap={40}>
            {books.map((item) => (
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
