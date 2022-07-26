import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { BiBookAdd } from 'react-icons/bi';

import Grid from '../components/Grid';
import Helmet from '../components/Helmet';
import Header from '../components/Header';
import Section from '../components/Section';
import Bookshelf from '../components/Bookshelf';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Home = () => {
  const { books, changeShelf, loading } = useGlobalContext();
  if (loading) return <Loader />;
  const currentlyReading = books.filter(
    (book) => book.shelf === 'currentlyReading'
  );
  const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
  const read = books.filter((book) => book.shelf === 'read');
  return (
    <Helmet title='Home Page'>
      <Header />
      <Section>
        <Grid col={1} gap={30}>
          <Bookshelf
            title='Currently Reading'
            books={currentlyReading}
            changeShelf={changeShelf}
          />
          <Bookshelf
            title='Want To Read'
            books={wantToRead}
            changeShelf={changeShelf}
          />
          <Bookshelf title='Read' books={read} changeShelf={changeShelf} />
        </Grid>

        <div className='open-search'>
          <Link to='/search'>
            <BiBookAdd size={35} />
          </Link>
        </div>
      </Section>
      <Footer color='#2b7a78' />
    </Helmet>
  );
};

export default Home;
