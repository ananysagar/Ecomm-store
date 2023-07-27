import React from 'react'
import electronics from '../images/electronics.jpg'
import jewellery from '../images/Jewellery.jpg'
import menscloth from '../images/mens-clothing.jpg'
import womenscloth from '../images/womens-clothing.jpg'
import '../components/Banner.css'

function Banner() {
  return (
    <div className='home-Container'>
        <div className='container'>
            <div className='grid-container'>
                <div className='featured grid-one'>
                    <a href='#'>
                        <img src={menscloth} className='banner-img' alt='bannerImg'/>
                        <p className='category-title1'>Mens Clothing</p>
                        <div class="overlay"></div>
                    </a>
                </div>
                <div className='featured grid-two'>
                    <a href='#'>
                        <img src={womenscloth} className='banner-img'  alt='bannerImg'/>
                        <p className='category-title2'>Womens Clothing</p>
                        <div class="overlay"></div>
                    </a>
                </div>
                <div className='featured grid-three'>
                    <a href='#'>
                        <img src={electronics} className='banner-img' alt='bannerImg'/>
                        <p className='category-title3'>Electronics</p>
                        <div class="overlay"></div>
                    </a>
                </div>
                <div className='featured grid-four'>
                    <a href='#'>
                        <img src={jewellery} className='banner-img' alt='bannerImg'/>
                        <p className='category-title4'>Jewellery</p>
                        <div class="overlay"></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner