import React from 'react';
import errorImage from '../assets/error-404.png';

const ErrorPage = () => {
   return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
         <img src={errorImage} alt="" />
         <h1 className='text-6xl font-bold text-gray-700'>OOPS!!</h1>
         <p className='text-gray-500 text-xl'>The page is not found</p>
      </div>
   );
};

export default ErrorPage;