import React, { useEffect, useState } from 'react'
import Categories from './pages/Categories';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function Path() {

  return (
    <div>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/categories' element={<Categories />} />
            </Routes>
        </Router>  
    </div>
  )
}

export default Path