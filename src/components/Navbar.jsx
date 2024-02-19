import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      name="wrapper"
      className='z-10  bg-gray-500 flex flex-row pt-5 pb-2 text-white fixed w-full'
      /*className={`z-10 flex flex-row pt-5 pb-2 text-white fixed w-full transition-all ${
        scrolling ? 'bg-gray-500 opacity-90 duration-700' : ''
      }`}*/
    >
      <div name="left" className="flex flex-row items-center text-3xl">
        <img src="/img/logoo.png" alt="" className="w-16 h-16" />
        <Link to="/">Dee's Apparel</Link>
      </div>
      <div name="center" className="flex-grow flex justify-center items-center">
        <p></p>
      </div>
      <div name="links" className="hidden  lg:flex flex-row items-center space-x-4">
      <Link to="/" className="p-4">
          Home
        </Link>
      <Link to="/" className="p-4">
          Products
        </Link>
        <Link to="about" className="">
          About
        </Link>
        <Link to="contact" className="p-4">
          Contact
        </Link>
      </div>
      <div name="icon" className="pr-10 pt-5 relative ">
          <ShoppingCartOutlinedIcon />
          <span className="bg-red-500 text-white rounded-full absolute bottom-9 right-7 px-2">
            0
          </span>
        </div>
        <div className='flex items-center pr-2'>
          <NavMobile/>
        </div>
    </div>
  );
};

export default NavBar;
