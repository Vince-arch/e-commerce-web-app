import React from 'react';
import Card from '../components/Card';


const Products = () => {
  return (
  <div>
    <div name="header" className="text-black pt-32 bg-pink-200">Categories:
    <ul className="">
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
    <div className='pt-10'><Card/></div>
  </div>
    )
}

export default Products