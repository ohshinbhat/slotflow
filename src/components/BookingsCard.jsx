import React from 'react'
import { IconContext } from 'react-icons'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
const BookingsCard = () => {
  return (
    <div>
        <div className='bg-[#FFFEEE] rounded-xl border-black border-[1px] px-[50px] py-5'>
            <div className='flex flex-row justify-between '>
                <div className='font-semibold text-[24px]'>Name of the service</div>
                <div>Time Slot: <span className='font-semibold'>1hr</span></div>
            </div>
            <div className='flex flex-row justify-between items-end gap-20'>
                <div >
                    <div>Booked by: Name of the booker</div>
                    <div className='flex flex-row gap-8 bg-blue-400 rounded-lg px-5 py-3'>
                        <div className='bg-[#FFFEEE] px-3 py-1 rounded-md'>Date: 30-04-2029</div>
                        <div className='bg-[#FFFEEE] px-3 py-1 rounded-md'>Timings: 12:00:00 IST</div>
                        <button className='bg-[#FFFEEE] px-3 py-1 rounded-md flex flex-row items-center justify-center gap-2'>
                            <IconContext.Provider value={{size:'1em', color:'black'}}>
                                <FaLink />

                            </IconContext.Provider>
                            <div>Link</div>
                        </button>

                    </div>


                </div>
                <button className='flex flex-row gap-1 items-center underline text-pink-500 font-bold'>
                    <div>Details</div>
                    <IconContext.Provider value={{color: 'black', size:'1.5em'}}>
                        <IoIosArrowRoundForward />

                    </IconContext.Provider>
                </button>
            </div>

        </div>
    </div>
  )
}

export default BookingsCard