import React from 'react';
import Card from '../components/Card';


const Products = () => {
  return (
  <div>
    <div name='header' className='flex flex-row space-x-40 max-h-screen  pt-24'>
    <div name="left" className="text-black text-5xl pl-5 ">Categories:
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
    <div name='right' className='max-h-full'> 
    <img className='max-h-screen ' src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
    </div>
    </div>
    <div className='pt-20'><Card/></div>
  </div>
    )
}

export default Products