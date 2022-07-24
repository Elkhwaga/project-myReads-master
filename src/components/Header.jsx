import React from 'react';

import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className='header-info'>
        <h1>find your book of choice.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
          sapiente quibusdam consequatur perspiciatis facere laboriosam non
          nesciunt at id repudiandae, modi iste? Eligendi, rerum!
        </p>
      </div>
    </header>
  );
};

export default Header;
