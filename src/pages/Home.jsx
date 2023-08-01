import React, { useEffect, useState } from 'react'
import Banner from '../components/homeComponents/Banner'
import NewsLetter from '../components/homeComponents/NewsLetter'
import ProudProducts from '../components/homeComponents/ProudProducts'
import ShopnowBanner from '../components/homeComponents/ShopnowBanner'
import ShopnowReverseBanner from '../components/homeComponents/ShopnowReverseBanner'
import TrendingSlider from '../components/homeComponents/TrendingSlider'
import axios from 'axios';

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, [])

    const fetchData = (() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    })

    return (
        <>
            <Banner />
            <ProudProducts data={data} />
            <ShopnowBanner />
            <TrendingSlider productData={data} />
            <ShopnowReverseBanner />
            <NewsLetter />
        </>
    )
}

export default Home