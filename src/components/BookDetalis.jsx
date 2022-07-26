import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Helmet from './Helmet';
import Grid from './Grid';
import Footer from './Footer';
import * as BookApi from '../utils/BooksAPI';
import { FaArrowLeft } from 'react-icons/fa';
import Loader from './Loader';

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

  if (loading) return <Loader />;

  return (
    <Helmet title='Book Detalis'>
      <section className='book-detalis container'>
        <div className='book-detalis-body'>
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
        </div>
      </section>
      <Footer color='#17252a' />
    </Helmet>
  );
};

export default BookDetails;
