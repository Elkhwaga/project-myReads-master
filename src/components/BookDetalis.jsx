import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Section, { SectionBody } from './Section';

import Loading from './Loader';
import Helmet from './Helmet';
import Grid from './Grid';

import * as BookApi from '../utils/BooksAPI';
import { FaArrowLeft } from 'react-icons/fa';

const BookDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      BookApi.get(id)
        .then((data) => {
          console.log(data);
          if (data) {
            setBook(data);
            setLoading(false);
          } else {
            setBook([]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <Helmet title='Book Detalis'>
      <Section>
        <SectionBody>
          <Link to='/' className='close'>
            <FaArrowLeft size={22} />
          </Link>

          <Grid col={2} mdCol={1}>
            <div className='book-details-img'>
              <img
                src={book.imageLinks && book.imageLinks.thumbnail}
                alt='cover img'
              />
            </div>
            <div className='book-details-info'>
              <h4 className='book-details-item-title'>{book.title}</h4>
              <h4 className='book-details-item-authors'>
                author: {book.authors}
              </h4>
              <p className='book-details-item-description'>
                {book.description}
              </p>

              <div className='book-details-item'>
                <p className='category'>
                  category:
                  <span>{book.categories}</span>
                </p>
              </div>
              <h5 className='language'>
                language:
                <span>{book.language}</span>
              </h5>
            </div>
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default BookDetails;
