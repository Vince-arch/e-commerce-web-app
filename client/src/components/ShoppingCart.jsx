import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartOutlined'
import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'



const ShoppingCart = () => {
  return (
    <div>
        <div name="icon" className="pr-10 pt-5 relative ">
          <ShoppingCartCheckout />
          <span className="bg-red-500 text-white rounded-full absolute bottom-4 right-7 px-2">
            {itemQuantity}
          </span>
    </div>
    </div>
  )
}

export default ShoppingCart