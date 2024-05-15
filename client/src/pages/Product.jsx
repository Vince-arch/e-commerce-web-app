import React from 'react'
import { Link } from 'react-router-dom';
import { urlFor } from '../../lib/client'
import { Button } from '@mui/material';
import { useShoppingCart } from '../context/ShoppingCartContext';
//import Card from '../components/Card'

const Product = ({product:{ image, name, slug, price}}) => {

  const { addItemToCart, removeItemFromCart} = useShoppingCart

  return (
    <div className='text-center hover:grey p-3 flex flex-col lg:flex-row flex-wrap lg:justify-center '>
      
        <div name= 'card' className=' '>
          <img className='h-72 w-72'
            src={urlFor(image && image[0])}
          />
          <div className='flex justify-between'>
          <p name='product-name' className='text-lg '>{name} </p>
          <p name='product-price' className=' rounded-b-md h-8 text-lg'>ksh.{price}</p>
          </div>
          <Link to={`/product/${slug.current}`}>
          <Button onClick={addItemToCart} variant='contained' size='small' style={{width: '280px'}} >Show More</Button>
          </Link>
        </div>
      
      
    </div>
  )
}

export default Product