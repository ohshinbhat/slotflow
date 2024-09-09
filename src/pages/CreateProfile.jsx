import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { MdOutlineModeEdit } from "react-icons/md";
const CreateProfile = () => {
  const navigate = useNavigate()
  return (
    <div className='px-[200px] py-10 h-full bg-black text-white'>
      <div className='text-[40px] font-semibold'>Create your profile</div>
      <div className='text-[14px] text-gray-500 pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident earum nam illum, eveniet sapiente unde molestiae culpa veniam reprehenderit laborum quasi dolorum adipisci, dolorem accusamus? Inventore dicta impedit voluptatibus sed.</div>
      <div className='flex flex-col gap-10 bg-home rounded-xl border-white border-2 px-[100px] py-[50px]'>
        <div className='flex flex-row justify-center gap-20'>
          <div className='border-r-[1px] border-gray-400 flex flex-col px-[50px] items-center gap-3  '>
            <img src='/Images/image.png' className='w-[300px]' />
            <button className='flex flex-row gap-1 items-center justify-center text-[16px] text-gray-600 font-medium py-1 px-3 border-[1px] border-black rounded-lg w-fit'>
              <IconContext.Provider value={{color: 'black'}}>
                <MdOutlineModeEdit />
              </IconContext.Provider>
              <div>Edit Photo</div>
            </button>
          </div>
          <div className='w-full'>
            <form>
              <div className="">
                <div className="border-b border-gray-900/10 pb-5">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">slotflow.in/</span>
                          <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="janesmith"
                            autoComplete="username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    

                    

                    
                  </div>
                </div>

                <div className="border-b border-gray-900/10 pb-5">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                  <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>   

                    <div className="sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Profession
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                        Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={''}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">Tell clients about yourself.</p>
                    </div>
                  </div>
                </div>
              </div>

                    
                

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={(e) => navigate('/dashboard')}
                  className="rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div></div>

      </div>
    </div>
  )
}

export default CreateProfile