import React from 'react'
import Slide from '../components/Slide'
import { Button, CardContent,} from '@mui/material'
import {motion} from 'framer-motion'
import data from '../components/List.json'

const Home = () => {
  return (
    <div name="home">
      <div name='background' className='h-screen flex items-center justify-center relative inset-0  h'>
          {/*<Slider/>*/}
        <img className='h-screen w-screen' src='https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <div className="absolute inset-0 bg-black opacity-40 "></div>
        {/*<div name='header' className='absolute text-slate-200 top-20'>
          <h1 className='l font-serif text-5xl'>STYLE & FASHION</h1>          
        </div>*/}
      <div name='middle' className='flex flex-col absolute text-slate-200 lg:text-6xl left-10 ' >
      <motion.h1
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 3 }}
      className='text-2xl lg:text-6xl'
    >
      We sell beautiful ladies' clothes
    </motion.h1> 
   <div className='text-xl font-serif '>
    <motion.h1
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 5 }}
    >
      Fashion, elegance and style.
    </motion.h1>
    </div> 
      <Button name='button' className='lg:w-1/4 top-5 w-1/2 rounded' sx={{
        backgroundColor: '#ff69b4', 
        color: 'black',
        '&:hover': {
          backgroundColor: '#e0459e',
        },
        
      }} variant="contained">SHOP NOW</Button>
      </div>
      </div>
      <div name='feature-section' className='bg-slate-300 text-black text-center font-mono text-4xl'>
        <span> Featured Clothes</span>
        <div className='w-30 overflow-x-hidden '>
          {/*<Slide/>*/}
          <div name='card' className='text-center hover:grey  p-3 m-4 flex flex-col lg:flex-row lg:justify-center'>
      {data.slice(0,3).map((item, id) => (
        <div key={item.id} className="flex  bg-gray-100 flex-col justify-center items-center m-2 transition duration-300 ease-in-out transform hover:scale-105 ">
          <img src={item.img} className='transition duration-500 ease-in-out transform hover:scale-90 p-1 rounded-md w-full lg:w-96 lg:h-96 object-cover' alt={item.title}></img>
          <h2 className='text-base'>{item.title}</h2>
          <h2 className='text-base'>Ksh.{item.price}</h2>
          <span className='bg-gray-400 hover:bg-gray-500 w-72 m-3  px-4 py-2 rounded text-black text-lg transition duration-200 ease-in-out transform hover:scale-100'>Add</span>
        </div>
      ))}
    </div>
        {/*<Card/>
        <Card/>*/}
        </div>
        </div> 
    </div>
  )
}

export default Home