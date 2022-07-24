import React from 'react';
import Helmet from '../components/Helmet';
import Header from '../components/Header';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Bookshelf from '../components/Bookshelf';
import { Link } from 'react-router-dom';
import { BiBookAdd } from 'react-icons/bi';

const Home = () => {
  return (
    <Helmet title='Home Page'>
      <Header />
      <Section>
        <Grid col={1} gap={30}>
          <Bookshelf title='Currently Reading' category='currentlyReading' />
          <Bookshelf title='Want To Read' category='wantToRead' />
          <Bookshelf title='Read' category='read' />
        </Grid>

        <div className='open-search'>
          <Link to='/search'>
            <BiBookAdd size={35} />
          </Link>
        </div>
      </Section>
    </Helmet>
  );
};

export default Home;
