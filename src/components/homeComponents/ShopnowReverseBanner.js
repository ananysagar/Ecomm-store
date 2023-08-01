import React from 'react'
import banner3 from '../../images/banner3-img.jpg'
import '../homeComponents/ShopnowReverseBanner.css'

function ShopnowReverseBanner() {
  return (
    <div className='shopBanner-reverse'>
        <div className='container-reverse'>
            <div className='banner-container-reverse'>
                <div className='img-side-reverse'>
                    <img src={banner3} alt='banner3-img'/>
                </div>
                <div className='right-side-reverse'>
                    <div className='text-side-reverse'>
                        <p className='banner-heading'>Shop Now for Trendy Deals!</p>
                        <p className='banner-content'>Explore the Latest Collection of Men's and Women's Clothing, Electronics, and Jewelry.</p>
                        <button className='shopnow-btn'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopnowReverseBanner