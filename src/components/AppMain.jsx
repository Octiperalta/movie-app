/* eslint-disable jsx-a11y/anchor-is-valid */
import { ChevronRightIcon } from "@heroicons/react/solid";
import { PlusIcon } from "@heroicons/react/outline";
import MediaCategories from "./MediaCategories";
import { NavLink } from "react-router-dom";

function AppMain() {
  return (
    <div className='relative flex-1 py-9'>
      <div className='relative h-screen overflow-hidden flex flex-col'>
        {/* Navlinks */}
        <div className='flex-shrink-0 px-8 pb-3'>
          <div className='flex space-x-6'>
            <NavLink
              to='/home/movies'
              className='text-gray-500 font-medium text-base tracking-tight hover:text-gray-200 transition-colors'
              activeClassName='!text-gray-200'>
              Movies
            </NavLink>
            <NavLink
              to='/home/tv'
              className='text-gray-500 font-medium text-base tracking-tight hover:text-gray-200 transition-colors'
              activeClassName='!text-gray-200'>
              TV Series
            </NavLink>
          </div>
        </div>

        {/* Content */}
        <div className='overflow-y-auto flex-1 pb-20 scrollbar-thin scrollbar-thumb-gray-800 px-8'>
          {/* Carousel */}
          <div className='mt-4'>
            <div className='relative max-w-full h-80 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-t from-black via-gray-900 to-red-900  '>
              <img
                src='https://mcuexchange.com/wp-content/uploads/2017/06/Spider-man-banner.jpg'
                alt=''
                className='w-full h-full object-cover object-top absolute opacity-40'
              />
              <div className='px-6 py-3 flex flex-col justify-between h-full relative '>
                <div className='flex items-center '>
                  <div className='flex'>
                    <img
                      src='https://i.pravatar.cc/150?img=36'
                      className='h-6 rounded-full'
                      alt=''
                    />
                    <img
                      src='https://i.pravatar.cc/150?img=32'
                      className='h-6 -ml-2 rounded-full'
                      alt=''
                    />
                    <img
                      src='https://i.pravatar.cc/150?img=14'
                      className='h-6 -ml-2 rounded-full'
                      alt=''
                    />
                  </div>
                  <span className='ml-3 text-xs text-gray-300 font-medium'>
                    +6 friends are watching
                  </span>
                </div>
                <div className='flex flex-col space-y-2 pb-5'>
                  <p className=' text-gray-200 text-3xl font-medium tracking-wide uppercase leading-none max-w-lg truncate'>
                    Spider-Man: Homecoming
                  </p>
                  <p className=' text-gray-300 text-xs font-medium uppercase'>
                    Action, Adventure, Fiction
                  </p>
                  <div className='flex space-x-2'>
                    <button className='bg-red-600 px-6 py-2 rounded-lg text-gray-200 text-sm hover:bg-red-800 transition-colors'>
                      Watch
                    </button>
                    <button className='bg-gray-600 bg-opacity-80 px-2 py-2 rounded-lg text-gray-200 flex items-center justify-center hover:bg-gray-700 hover:bg-opacity-80 transition-colors '>
                      <PlusIcon className='h-6 w-6' />
                    </button>
                  </div>
                </div>
              </div>
              <div className='absolute right-8 top-1/2'>
                <button className='bg-gray-600 bg-opacity-70 px-2 py-2 rounded-full text-gray-200 flex items-center justify-center hover:bg-gray-800 hover:bg-opacity-80 transition-colors'>
                  <ChevronRightIcon className='h-6 w-6' />
                </button>
              </div>
            </div>
          </div>
          {/* Media categories */}
          <MediaCategories />
        </div>
      </div>
    </div>
  );
}

export default AppMain;
