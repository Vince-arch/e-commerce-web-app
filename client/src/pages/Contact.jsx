import { Email,LocationOn, Phone } from '@mui/icons-material';
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with your form submission logic
  };

  return (
    <div className='bg-white h-auto pb-20'>
       <div name='header' className='pt-32 flex justify-center text-5xl font-sans pb-3 text-slate-500'> CONTACT US</div>
    <div name='background' className=' pt-10  grid grid-cols-1 justify-center'>
      <div name='section-1' className='b flex flex-col items-center'>
        <div className='text-xl flex justify-center items-center'><LocationOn className=''style={{color:'black', fontSize:'3rem'}}/>Location</div> 
        <p className='flex pl-6 pb-3'>Nakuru</p>
        <div className='text-xl flex justify-center items-center pl-12'><Phone style={{color:'black', fontSize:'3rem'}}/>Phone Number</div>
        <p className='pl-10 pb-3'>070000000</p>
        <div className='pr-11 text-xl flex justify-center items-center'><Email style={{color:'black', fontSize:'3rem'}}/>Email</div>
        <p className='pl-28' > deeapparel@gmail.com</p>
      </div>
    
    {/*<div name='section-2' className='  flex items-center justify-center'>
      <div name='card' className=' bg-gray-300 h-auto w-4/5 p-5 shadow-2xl border-gray-200 shadow-gray-500'>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input type="text" id="name" {...register('name', { required: 'Name is required' })} className="form-input mt-1 block w-full" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input type="email" id="email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })} className="form-input mt-1 block w-full" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
  <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
  <input 
    type="tel" 
    id="phone" 
    {...register('phone', { 
      required: 'Phone number is required', 
      pattern: {
        value: /^\d{10}$/, 
        message: 'Enter a valid phone number'
      }
    })}
    className="form-input mt-1 block w-full" 
  />
  {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
</div>

      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-700">Comment</label>
        <textarea id="comment" 
        {...register('comment', {
          required: 'Please add a comment'
        })} className="form-textarea mt-1 block w-full h-28"
        >
        {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
        </textarea>
    </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
    </div>
      </div>*/}
      </div>
      </div>
  );
};

export default ContactForm;
