import React from 'react'
import Slide from '../components/Slide'
import { Button, CardContent,} from '@mui/material'
import {motion} from 'framer-motion'



const About = () => {
  return (
    <div name="home" className="bg-white" >
      <div name='background' className=' flex flex-col pt-32 pb-20'>
        <div name='container' className=' grid grid-cols-1 bg:grid-row '>
          <div className='flex flex-col bg:flex-row items-center justify-center pb-20  text-slate-500 text-5xl'>ABOUT</div>
          <div name='section-1' className='flex flex-col lg:flex-row items-center justify-center gap-9 lg:gap-80 pb-10'>
          <img className='h-96 w-80 flex flex-col bg:flex-row lg:pb-20' src='https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
          <div name='section-2'className='flex flex-col bg:flex-row'>
          <span className='flex pl-5 flex-col text-2xl font-serif'>ABOUT DEE'S APPAREL</span>
          <p>We are an apparel company</p>
          </div>
          </div>
        </div>
      </div> 
      
    </div>
  )
}

export default About