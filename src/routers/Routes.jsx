import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Search from '../pages/Search';
import Home from '../pages/Home';

import BookDetalis from '../components/BookDetalis';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/books/:id' element={<BookDetalis />} />
    </Routes>
  );
};

export default MainRoutes;
