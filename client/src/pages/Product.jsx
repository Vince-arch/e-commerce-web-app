import React from 'react'
import { Link } from 'react-router-dom';
import { urlFor } from '../../lib/client'
import Card from '../components/Card'

const Product = ({product:{ image, name, slug, price}}) => {
  return (
    <div className='text-center hover:grey p-3 flex flex-col lg:flex-row flex-wrap lg:justify-center '>
      <Link href={'./product/${slug.current}'}>
        <div >
          <img className='h-72 w-72'
            src={urlFor(image && image[0])}
          />
          <p name='product-name' className=''>{name}</p>
          <p name='product-price' className=''>ksh.{price}</p>
        </div>
      </Link>
      
    </div>
  )
}

export default Product