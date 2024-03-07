import React from 'react';
import Card from '../components/Card';


const Products = () => {
  return (
  <div>
    <div name='header' className='flex flex-row justify-between h pb-10'>
    <div name="left" className="text-black pt-32 ">Categories:
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
    <div name='right' className='w-3/4 '> 
    <img className='' src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
    </div>
    </div>
    <div className='pt-10'><Card/></div>
  </div>
    )
}

export default Products