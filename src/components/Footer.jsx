import React from 'react';
import PropTypes from 'prop-types';
function Footer({ color }) {
  return (
    <footer className='text-center py-1' style={{ backgroundColor: color }}>
      <p>&copy; 2022 All rights reserved | Design by Mohamed Khaled Mohamed</p>
    </footer>
  );
}

Footer.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Footer;
