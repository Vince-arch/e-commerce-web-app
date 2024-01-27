import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div name="wrapper" className='z-10 flex text-slate-200 fixed w-full'>
      <div name="left" className='flex flex-row items-center text-3xl'>
        <img src='/img/logoo.png' alt='' className='w-16 h-16' />
        <Link to="/">Dee's Apparel</Link>
      </div>
      <div name="center" className="flex-grow flex justify-center items-center">
        <p></p>
      </div>
      <div name="right" className='flex flex-row items-center space-x-4'>
        <Link to="/" className="">About</Link>
        <Link to="/" className="p-4">Contact</Link>
        <div name="icon" className="pr-5 relative">
          <ShoppingCartOutlinedIcon />
          <span className="bg-red-500 text-white rounded-full absolute bottom-3 right-2 px-2">0</span>
      </div>
      </div>

    </div>
  );
}

export default NavBar;
