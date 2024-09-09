import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { IconContext } from 'react-icons'
import { IoIosAddCircleOutline } from 'react-icons/io'

const Services = () => {
  return (
    <div className='min-h-full pl-20 py-10 '>
      <div>
        <div className='flex flex-row justify-between text-white pb-5'>
          <div className='text-[24px] font-light'>Total Active Services: <span className='font-bold'>3</span></div>
          <button className='bg-purple-700 flex flex-row gap-1 rounded-lg items-center px-4 py-1'>
            <IconContext.Provider value={{color: 'white'}}>
              <IoIosAddCircleOutline />
            </IconContext.Provider>
            <div>Add a new service</div>
          </button>
        </div>
        <div className='flex flex-col gap-5 '>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>


        </div>

      </div>
    </div>
  )
}

export default Services