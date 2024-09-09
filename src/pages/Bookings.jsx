import React from 'react'
import BookingsCard from '../components/BookingsCard'

const Bookings = () => {
  return (
    <div className='min-h-full pl-20 py-10'>
      <div>
        <div className='flex flex-row justify-between pb-5'>
          <div className='text-[24px] text-white'>Total Booked Sessions: <span className='font-bold'>3</span></div>
          
        </div>
        <div className='flex flex-col gap-5 '>
          <BookingsCard/>
          <BookingsCard/>
          <BookingsCard/>
          <BookingsCard/>
          <BookingsCard/>

          <BookingsCard/>

      


        </div>

      </div>
    </div>
  )
}

export default Bookings