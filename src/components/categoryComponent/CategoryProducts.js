import React, { useEffect, useState } from 'react';
import '../categoryComponent/CategoryProduct.css';
import { Link } from 'react-router-dom';

function CategoryProducts(props) {
    const [filterData, setFilterData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeCategory, setActiveCategory] = useState('')

    useEffect(() => {
        if(props.data.length > 0) {
            setFilterData(props.data);
        }
    }, [props.data]);
    
    const filterResult=(catItem) => {
        
        if(catItem === 'all'){
            setFilterData(props.data);
            setSelectedCategory('All')
            setActiveCategory('all');
        } else{
            const result = props.data.filter((curData) => {
                return curData.category === catItem;
            });
            setFilterData(result);
            setSelectedCategory(catItem.toUpperCase());
            setActiveCategory(catItem);
        }
    };

    const displayProdData = filterData.map((data) => {
        return (
            <div key={data.id} className='category-card'>
                <img src={data.image} alt={data.title}/>
                <div className='category-card-details'>
                    <p className='category-product-title'>{data.title}</p>
                </div>
                <div className='category-call-to-action'>
                    <p className='category-price'>Rs {data.price}</p>
                    <button className='category-add-to-cart'>Add to Cart</button>
                </div>
            </div>
        );
    });

    
  return (
    <div>
        <div className='category'>
            <div className='category-container'>
                <div className='category-content'>
                    <div className='category-top'>
                        <a href='/'><i class="fas fa-caret-left"></i>Home</a>
                        <h2 className='category-title'>{selectedCategory}</h2>
                    </div>
                    <div className='category-btn'>
                        <button className={activeCategory === ('' || 'all') ? 'active' : ''} onClick={() => filterResult('all')}>All</button>
                        <button className={activeCategory ==="men's clothing" ? 'active' : ''} onClick={() => filterResult("men's clothing")}>Men's Clothing</button>
                        <button className={activeCategory ==="women's clothing" ? 'active' : ''} onClick={() => filterResult("women's clothing")}>Women's Clothing</button>
                        <button className={activeCategory ==="electronics" ? 'active' : ''} onClick={()=> filterResult('electronics')}>Electronics</button>
                        <button className={activeCategory ==="jewelery" ? 'active' : ''} onClick={()=> filterResult('jewelery')}>Jewellery</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='category-product-container'>
            {displayProdData}
        </div>
    </div>
  );
}

export default CategoryProducts