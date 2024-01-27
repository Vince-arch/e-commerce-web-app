import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 bg-gray-700 text-slate-200">
      <div className="flex flex-col items-center mb-4 lg:mb-0">
        <Link to="/" className="pb-2 text-lg font-bold">
          Dee's Apparel
        </Link>
        <p className="text-sm">Copyright © 2024</p>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row justify-center space-x-8">
        <div className="flex flex-col items-center mb-4 lg:mb-0">
          <Link to="/" className="text-sm font-semibold mb-2">
            About Us
          </Link>
          <p className="text-xs text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/" className="text-sm font-semibold mb-2">
            Contact Us
          </Link>
          <p className="text-xs text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          </p>
        </div>
      </div>

      <div className=" flex flex-col items-center">
        <div className="text-sm font-semibold mb-2">Stay connected</div>
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
