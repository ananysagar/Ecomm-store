import React, { useEffect, useState } from 'react'
import Categories from './pages/Categories';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CategoryProducts from './components/categoryComponent/CategoryProducts';

function Path() {

  return (
    <div>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/categories/:category' element ={<CategoryProducts />} />
            </Routes>
        </Router>  
    </div>
  )
}

export default Path