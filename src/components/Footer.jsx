import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <div name='container' className="flex flex-col lg:flex-row p-8 h-fit pb-48 lg:pb-0 bg-gray-700 text-slate-200">
      <div className="flex flex-col items-center mb-4 lg:mb-0">
        <Link to="/" className="pb-2 lg:text-4xl  text-lg font-bold">
          Dee's Apparel
        </Link>
        <p className="text-sm">Copyright © 2024</p>
      </div>

      <div name='pages' className="flex-grow flex flex-col items-center justify-center ">
       <span className='text-3xl font-bold'>Links</span>
       <div className="flex flex-col ">
          <Link to="/" className=" text-sm font-semibold mb-2">
            Home
          </Link>
        </div>
       <div className="flex flex-col ">
          <Link to="products" className=" text-sm font-semibold mb-2">
            Products
          </Link>
        </div>
        <div className="flex flex-col  lg:mb-0 ">
          <Link to="about" className=" text-sm font-semibold mb-2 ">
            About Us
          </Link>
        </div>
        <div className="flex flex-col ">
          <Link to="/" className=" text-sm font-semibold mb-2">
            Contact Us
          </Link>
          
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-lg font-bold mb-2">Stay connected</div>
        <div className="flex flex-row space-x-4">
          <Facebook fontSize="large" color="primary" />
          <Instagram fontSize="large" sx={{ color: '#E1306C' }} />
          <Twitter fontSize="large" sx={{ color: '#1DA1F2' }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
