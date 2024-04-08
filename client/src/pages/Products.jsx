import React from 'react';
//import Card from '../components/Card';
import Product from './Product'
import client from '../../lib/client'
import { useEffect, useState } from 'react';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = '*[_type == "product"]'; 
        const products = await client.fetch(query);
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once


  return (
  <div>
    <div name='header' className='flex flex-row gap-24 pt-24'></div>
   {/* <div name="left" className="text-black text-5xl pl-5">Categories:
    <ul className="text-xl flex flex-col text-center space-y-2 pt-5">
      <li>Skirts</li> 
      <li>Dresses</li>
      <li>Trousers</li>
      <li>Tops</li>
      <li>Hats</li>
      <li>Shoes</li>
      <li>Sweaters</li>
      <li>Jackets</li>
    </ul>
    </div>
    <div name='right' className=' max-h-screen w-full'> 
    <img className='h-80 w-full ' src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D"></img>
    </div>
  </div>*/}
    <div name='body' className=''>
    <div className='text-black flex flex-row flex-wrap  gap-5 p-2 '>
      {products?.map((product)=> <Product key= {product._id} product={product}/>)}</div>
    </div>
  </div>
    )
}

export default Products