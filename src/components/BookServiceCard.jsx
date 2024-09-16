import React from 'react'
import { IconContext } from 'react-icons'
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const BookServiceCard = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className='bg-[#FFFEEE] rounded-xl border-black border-[1px] px-[50px] py-5'>
            <div className='flex flex-row justify-between '>
                <div className='font-semibold text-[24px]'>Name of the service</div>
                <div>Time Slot: <span className='font-semibold'>1hr</span></div>
            </div>
            <div className='flex flex-row justify-between items-end gap-20'>
                <div className='text-[14px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsa eum suscipit accusantium iusto. Provident totam porro nesciunt quae! Molestiae ad inventore quae quaerat necessitatibus voluptates a cumque repellendus commodi?</div>
                <div className='flex flex-row gap-8'>
                    <button onClick={(e) => navigate('/bookslot')} className='flex flex-row gap-1 items-center px-4 py-1 rounded-md bg-black border-[1px] border-white text-white font-bold'>
                        <div className='text-nowrap'>Book Call</div>
                        <IconContext.Provider value={{color: 'white', size:'1.5em'}}>
                            <MdAddCall />

                        </IconContext.Provider>
                    </button>
                    
                    <button className='flex flex-row gap-1 items-center underline text-pink-500 font-bold'>
                        <div>Details</div>
                        <IconContext.Provider value={{color: 'black', size:'1.5em'}}>
                            <IoIosArrowRoundForward />

                        </IconContext.Provider>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default BookServiceCard