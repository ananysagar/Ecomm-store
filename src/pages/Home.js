import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProudProducts from '../components/ProudProducts'
import ShopnowBanner from '../components/ShopnowBanner'
import ShopnowReverseBanner from '../components/ShopnowReverseBanner'
import TrendingSlider from '../components/TrendingSlider'
import NewsLetter from '../components/NewsLetter'
import Categories from '../pages/Categories';
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function Home() {
    const [data , setData] = useState([]);

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = (() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res=> setData(res.data))
        .catch(err => console.log(err));
    })
    

  return (
    <div>
        <Router>
            <Routes>
              <Route path="/" element={<Banner />} />
              <Route path='/categories' element={<Categories />} />
            </Routes>
            <ProudProducts data={data}/>
            <ShopnowBanner />
            <TrendingSlider productData={data}/>
            <ShopnowReverseBanner />
            <NewsLetter />
        </Router>  
    </div>
  )
}

export default Home