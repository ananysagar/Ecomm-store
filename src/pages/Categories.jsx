import React, { useEffect, useState } from 'react'
import CategoryProducts from '../components/categoryComponent/CategoryProducts'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Categories() {
  const [data, setData] = useState([]);
  const {category} = useParams();
  
  const catMap = new Map([
    ["men", "men's clothing"],
    ["women", "women's clothing"],
    ["electronics", "electronics"],
    ["jewelery", "jewelery"],
    ["all", "all"]
  ]);

    useEffect(() => {
      fetchData();
    }, [])

    const fetchData = (() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    })
  return (
    <div>
      <CategoryProducts data={data} searchedKey={catMap.get(category) || 'all'}/>
    </div>
  )
}

export default Categories