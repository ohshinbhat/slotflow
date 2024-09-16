import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import BookServiceCard from '../../components/BookServiceCard'

const ViewProfile = () => {
  return (
    <div className='px-[100px]'>
      <div className='flex py-10 pl-14 items-center justify-center w-full'>
        <div className='flex flex-col items-center bg-[#FFFEEE] rounded-xl border-black border-[1px] px-[50px] py-5'>
         
          <div className='w-full flex flex-row items-center py-10 border-b-[1px] border-black'>
            <div className='flex-[0.25]'>
              <img src='/Images/image.png' className='h-[200px]' />
            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <div>John Doe</div>
              <div>Profession: Agency Owner</div>
              <div>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores, aperiam libero quod dicta id aut facilis accusamus, vitae dolorum modi accusantium minima sint qui! Accusamus, est! Tempore, ea iure.</div>
            </div>

          </div>
          <div className='py-10 flex flex-col gap-5'>
            <BookServiceCard/>
            <BookServiceCard/>
            <BookServiceCard/>
            <BookServiceCard/>
            <BookServiceCard/>
            <BookServiceCard/>



          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProfile