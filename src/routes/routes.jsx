import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Search from '../pages/Search';

import BookDetalis from '../components/BookDetalis';

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/books/:id' element={<BookDetalis />} />
    </Routes>
  );
}

export default MainRoutes;
