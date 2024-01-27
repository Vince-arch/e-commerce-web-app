import React from 'react'
import { EastOutlined } from '@mui/icons-material'
import { WestOutlined } from '@mui/icons-material'

const Slider = () => {
    const data =[
        "https://images.unsplash.com/photo-1522512115668-c09775d6f424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwd29tYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1533435137002-455932c8538f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1583994010661-738aa9e96eb3?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]
  
    return (
    <div name="slider" className='h-screen w-screen relative'>
        <div name='container' className='w-full h-full flex'>
            <img src={data[0]} alt='' className='w-screen h-full object-cover'></img>
            <img src={data[1]} alt='' className='w-screen h-full object-cover'></img>
            <img src={data[2]} alt='' className='w-screen h-full object-cover'></img>
        </div>
        <div name="icons" className='absolute left-0 right-0 mx-auto'>
            <div name="icon" >
                <WestOutlined />
            </div>
            <div name="icon" >
                <EastOutlined />
            </div>
        </div>
    </div>
  )
}

export default Slider