import React from 'react';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='wrapper'>
        <div className='ring'></div>
        <div className='ring'></div>
        <div className='ring'></div>
        <p>loading...</p>
      </div>
    </div>
  );
};

export default Loader;
