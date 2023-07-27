import React, { useState } from 'react'
import '../components/TrendingSlider.css'

function TrendingSlider(props) {
    const displayIDs = [3,6,9,19,15,2,12,17,4];
    const displayProduct = props.productData
    .filter(productData => displayIDs.includes(productData.id))
    .map((productData) => {
        return(
            <div className='product-card' key={productData.id}>
                <img src={productData.image} alt={productData.title}/>
                <p className='product-title'>{productData.title}</p>
                <div className='call-to-action-section'>
                    <div className='price'>Rs {productData.price}</div>
                    <button className='add-cart-btn'>Add to Cart</button>
                </div>
            </div>
        )
    })
    const [slideIndex , setSlideIndex] = useState(0);
    
    const handleArrowClick = (direction) => {
        if(direction==='left') {
            setSlideIndex((prevIndex)=> 
                prevIndex===0 ? displayProduct.length-1 : prevIndex-1
            );
        } else if(direction==='right'){
            setSlideIndex((prevIndex) => 
                prevIndex === displayProduct.length-1 ? 0: prevIndex+1
            );
        }
    }

  return (
    <div className='trending-container'>
        <div className='card-container'>
            <div className='trending-card'>
                <div className='trending-header'>
                    <p className='trend-heading'>Trending Now</p>
                    <div className='arrow'>
                        <span className='arrow-left' onClick={()=>handleArrowClick('left')}><i class="fa-solid fa-arrow-left"></i></span>
                        <span className='arrow-right' onClick={()=>handleArrowClick('right')}><i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className='trending-products'>
                    {displayProduct.slice(slideIndex).concat(displayProduct.slice(0,slideIndex))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrendingSlider