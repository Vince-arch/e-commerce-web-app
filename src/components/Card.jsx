import React from 'react'
import { Button } from '@mui/material'

const Card = () => {
 const  data=["https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1522512115668-c09775d6f424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwd29tYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww",
   "https://images.unsplash.com/photo-1533435137002-455932c8538f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  return (
    <div name='card' className=' text-center m-4 rounded '>
        <img src={data} className='p-1 rounded' ></img>
        
        <h2 className='text-base'>item</h2>
        <span className='bg-gray-500 mt-2 flex justify-center rounded text-black text-lg  '>Add</span>
    </div>
  )
}
export default Card