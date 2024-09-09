import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='bg-home bg-cover bg-center min-h-screen'>
      <div className='flex flex-col h-full '>
        <Navbar />
        <div className=''>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
