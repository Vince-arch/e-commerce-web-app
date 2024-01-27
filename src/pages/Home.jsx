import React from 'react'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div name="home">
      <div name='background' className='flex items-center justify-center relative inset-0'>
          {/*<Slider/>*/}
        <img className='bg-gradient-to-r from-gray-900 to-gray-500' src='https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <div className="absolute inset-0 bg-black opacity-30 "></div>
        <div name='content' className='absolute text-slate-200'>
          <h1 className='text-5xl'>STYLE & FASHION</h1>
        </div>
             
      </div>
      <div className='bg-black h-screen'></div> 
    </div>
  )
}

export default Home