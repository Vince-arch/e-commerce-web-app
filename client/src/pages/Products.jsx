import React from 'react';
import Card from '../components/Card';


const Products = () => {
  return (
  <div>
    <div name='header' className='flex flex-row justify-between h pb-10'>
    <div name="left" className="text-black pt-32 bg-pink-200">Categories:
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
    <div name='right' className=''> 
    <img className='' src="https://images.unsplash.com/photo-1522512115668-c09775d6f424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwd29tYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww"></img>
    </div>
    </div>
    <div className='pt-10'><Card/></div>
  </div>
    )
}

export default Products