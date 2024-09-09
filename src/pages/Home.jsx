import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
        <div className=' px-[200px] '>
          <div className='flex flex-row w-full justify-between h-full mt-10'>
            <div className='flex flex-col flex-1 gap-0 items-center justify-center mt-10'>
              <div className='text-[100px] w-full text-left '>Book Calls, </div>
              <div className='text-[100px] w-full text-left'>Not Excuses!</div>
              <div className='w-full text-left'>Simplify client communications with our call booking app designed for agencies and consultants. Easily schedule, manage, and track calls, ensuring you stay organized and focused on delivering results.</div>
              <div className='flex items-center justify-start w-full text-left pt-5'>
                <Link to='/createprofile'><button className='flex flex-row gap-2  items-center justify-center text-lg bg-black text-white  font-semibold px-4 py-2 border-[1px] border-black rounded-lg'>
                 <div>Get Started</div>
                  <IoArrowForwardOutline />
                </button></Link>

              </div>
            </div>
            <div className='flex-1 flex items-center justify-end '>
              <img src="/Images/hero.png" alt="image banner" className='pr-20 mix-blend-multiply'/>


            </div>
          </div>

        </div>

  
  )
}

export default Home