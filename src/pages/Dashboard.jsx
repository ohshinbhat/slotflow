import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { VscChecklist } from "react-icons/vsc";
import { IconContext } from 'react-icons';
import { PiCalendarDots } from "react-icons/pi";
import { GrView } from "react-icons/gr";
import { CiWallet } from "react-icons/ci";
const Dashboard = () => {
  const navigate = useNavigate()
  const [dash, setDash] = useState(1)
  return (
    <div className='flex  flex-row pr-[100px] h-full bg-black'>
      <div className='flex-[0.15] text-[16px] font-medium border-r-[1px] min-h-screen border-white h-full'>
        <div className='flex flex-col items-start flex-nowrap h-full pt-10 gap-3 text-white '>
          <button onClick={(e) => { 
              navigate('/dashboard/services'); 
              setDash(1); 
            }}  className={dash == 1 ? 'flex flex-row gap-2 font-bold items-center w-full px-10 py-2 bg-purple-600 ': 'flex flex-row gap-2 items-center w-full px-10 py-2  '}>
            <IconContext.Provider value={{color:'white'}}>
              <VscChecklist />
            </IconContext.Provider>
            <div>Services</div>
          </button>
          <button onClick={(e) => { 
              navigate('/dashboard/bookings'); 
              setDash(2); 
            }} className={dash == 2 ? 'flex flex-row gap-2 font-bold items-center w-full px-10 py-2 bg-purple-600 ': 'flex flex-row gap-2 items-center w-full px-10 py-2  '}>
            <IconContext.Provider value={{color:'white'}}>
              <PiCalendarDots />
            </IconContext.Provider>
            <div>Bookings</div>
          </button>
          <button onClick={(e) => { 
              navigate('/dashboard/profileview'); 
              setDash(3); 
            }} className={dash == 3 ? 'flex flex-row gap-2 font-bold items-center w-full px-10 py-2 bg-purple-600 ': 'flex flex-row gap-2 items-center w-full px-10 py-2  '}>
            <IconContext.Provider value={{color:'white'}}>
              <GrView />
            </IconContext.Provider>
            <div className='text-nowrap'>Profile View</div>
          </button>
          <button onClick={(e) => { 
              navigate('/dashboard/payments'); 
              setDash(4); 
            }} className={dash == 4 ? 'flex flex-row gap-2 font-bold items-center w-full px-10 py-2 bg-purple-600 ': 'flex flex-row gap-2 items-center w-full px-10 py-2  '}>
            <IconContext.Provider value={{color:'white'}}>
              <CiWallet />
            </IconContext.Provider>
            <div>Payments</div>
          </button>
        </div>
      </div>
      <div className='flex-1 h-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
