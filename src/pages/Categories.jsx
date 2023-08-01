import React, { useEffect, useState } from 'react'

import CategoryProducts from '../components/categoryComponent/CategoryProducts'
import axios from 'axios';

function Categories() {
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
    <div>
      <CategoryProducts data={data}/>
    </div>
  )
}

export default Categories