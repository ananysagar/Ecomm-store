import React from 'react'
import '../homeComponents/ProudProduct.css'

function ProudProducts(props) {

    const displayIDs = [2,3,5,7,10,11,16,18];

    const displayData = props.data
    .filter(data=> displayIDs.includes(data.id))
    .map((data) => {
        return(
            <div key={data.id} className='card'>
                <img src={data.image} />
                <div className='card-details'>
                    <p className='product-title'>{data.title}</p>
                </div>
                <div className='call-to-action'>
                    <p className='price'>Rs {data.price}</p>
                    <button className='add-to-cart'>Add to Cart</button>
                </div>
            </div>
        )
    })
  return (
    <div className='proudProductSection'>
        <div className='proudHeading'>Products we are proud of</div>
        <div className='product-container'>
            {displayData}
        </div>
    </div>
  )
}

export default ProudProducts