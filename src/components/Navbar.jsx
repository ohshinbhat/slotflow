import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='flex flex-row justify-between py-5 px-[100px] border-b-[1px] border-black'>
        <div className='flex flex-row items-center'>
          <img src='/Images/logoblk.png' className='h-10' />
          <button onClick={() => navigate('/')} className='text-[32px] font-bold'>SLOTFLOW</button>
        </div>
        <div className='flex flex-row gap-10 text-[20px] font-medium'>
          <button onClick={() => navigate('/products')}>PRODUCT</button>
          <button onClick={() => navigate('/workflows')}>WORKFLOW</button>
          <button onClick={() => navigate('/contact')}>CONTACT US</button>
        </div>
        <button>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
