import { PlusIcon } from "@heroicons/react/outline";
import React from "react";

function ActorCard({ actor }) {
  const { actorName, moviesCount, imageURL } = actor;
  return (
    <div className='h-52 2xl:h-60 relative rounded-lg overflow-hidden bg-gray-900 cursor-pointer group '>
      <img
        src={imageURL}
        alt=''
        className='absolute inset-0 w-full h-full object-cover object-center transition-opacity opacity-40 group-hover:opacity-70  '
      />
      <div className='flex flex-col justify-between h-full p-3 relative'>
        <div className='self-end'>
          <button className=' bg-gray-600 p-1 rounded-lg text-gray-200 flex items-center justify-center hover:bg-red-800 hover:bg-opacity-70 transition-colors '>
            <PlusIcon className='h-5 w-5' />
          </button>
        </div>
        <div className='text-center flex flex-col'>
          <p className='text-xs tracking-wide truncate font-medium text-gray-100'>
            {actorName}
          </p>
          <span className='text-[0.7rem] text-gray-400 font-medium leading-none mt-2'>
            +{moviesCount} movies
          </span>

          <span className='mt-1 flex justify-center'>
            <svg
              viewBox='0 0 20 20'
              className='w-3 h-3 fill-current text-yellow-400'>
              <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
            </svg>
            <svg
              viewBox='0 0 20 20'
              className='w-3 h-3 fill-current text-yellow-400'>
              <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
            </svg>
            <svg
              viewBox='0 0 20 20'
              className='w-3 h-3 fill-current text-yellow-400'>
              <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
            </svg>
            <svg
              viewBox='0 0 20 20'
              className='w-3 h-3 fill-current text-yellow-400'>
              <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
            </svg>
            <svg
              viewBox='0 0 20 20'
              className='w-3 h-3 fill-current text-yellow-400'>
              <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ActorCard;
