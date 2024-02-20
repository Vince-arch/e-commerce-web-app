import React from 'react';
import { Button } from '@mui/material';
import data from './List.json';

const Card = () => {
  {/*const data =  [
    {
      id: 1,
      title: "one",
      price:2000,
      img: "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "two",
      price:3000,
      img: "https://images.unsplash.com/photo-1522512115668-c09775d6f424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwd29tYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww"
    },
    {
      id: 3,
      title: "three",
      price:800,
      img: "https://images.unsplash.com/photo-1533435137002-455932c8538f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];*/}

  return (
    <div name='card' className='text-center hover:grey  p-3 m-4 flex flex-col lg:flex-row lg:justify-center'>
      {data.map((item, id) => (
        <div key={item.id} className="flex  bg-gray-100 flex-col justify-center items-center m-2 transition duration-300 ease-in-out transform hover:scale-105 ">
          <img src={item.img} className='transition duration-500 ease-in-out transform hover:scale-90 p-1 rounded-md w-full lg:w-96 lg:h-96 object-cover' alt={item.title}></img>
          <h2 className='text-base'>{item.title}</h2>
          <h2 className='text-base'>Ksh.{item.price}</h2>
          <span className='bg-gray-400 hover:bg-gray-500 w-72 m-3  px-4 py-2 rounded text-black text-lg transition duration-200 ease-in-out transform hover:scale-100'>Add</span>
        </div>
      ))}
    </div>
  );
};

export default Card;
