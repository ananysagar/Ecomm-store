import React from 'react'
import banner2 from '../images/banner2-img.jpg'
import '../components/ShopnowBanner.css'

function ShopnowBanner() {
  return (
    <div className='shopBanner'>
        <div className='container'>
          <div className='banner-container'>
            <div className='left-side'>
              <div className='text-side'>
                <p className='banner-heading'>Shop Now for Trendy Deals!</p>
                <p className='banner-content'>Explore the Latest Collection of Men's and Women's Clothing, Electronics, and Jewelry.</p>
                <button className='shopnow-btn'>Shop Now</button>
              </div>
            </div>
            <div className='img-side'>
              <img src={banner2} alt='banner2-img'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ShopnowBanner