import React from 'react'
import { Link } from 'react-router-dom';
import { urlFor } from '../../lib/client'
//import Card from '../components/Card'
import { Button } from '@mui/material';

const Product = ({product:{ image, name, slug, price}}) => {
  return (
    <div className='text-center hover:grey p-3 flex flex-col lg:flex-row flex-wrap lg:justify-center '>
      <Link href={'./product/${slug.current}'}>
        <div name= 'card' className='rounded-xl hover:scale-125 duration-500 '>
          <img className='h-72 w-72 '
            src={urlFor(image && image[0])}
          />
          <p name='product-name' className='text-lg'>{name}</p>
          <p name='product-price' className='bg-gray-400 rounded-b-md h-8 text-lg'>ksh.{price}</p>
          <Button/>
        </div>
      </Link>
      
    </div>
  )
}

export default Product