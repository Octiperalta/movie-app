import React from "react";
import imdbLogo from "../img/imdb-logo.png";
import popularity from "../img/popularity.png";

function MediaCard({ value, isMovie, popular }) {
  return (
    <div className='flex space-x-2'>
      <img
        src={`https://image.tmdb.org/t/p/w300/${value.poster_path} `}
        alt=''
        className='w-14 h-20 rounded-lg'
      />

      <div className='flex flex-col justify-between'>
        <div className='flex flex-col space-y'>
          <p className='text-gray-200 text-xs '>
            {isMovie ? value.title : value.name}
          </p>
          <p className='text-[0.7rem] text-gray-400'>Action, Horror</p>
        </div>
        <div className='flex items-center space-x-2 '>
          <img
            src={popular ? popularity : imdbLogo}
            className={popular ? "h-4 -mt-1" : "h-5"}
            alt=''
          />
          <span className='text-xs text-gray-200 font-base'>
            {value.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MediaCard;
