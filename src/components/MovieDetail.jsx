/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovie } from "../services/contentService";
import {
  ArrowLeftIcon,
  StarIcon as EmptyStarIcon,
} from "@heroicons/react/outline";
import { StarIcon, PlayIcon } from "@heroicons/react/solid";
import Loader from "./Loader";
import { Transition } from "@headlessui/react";

function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  console.log(movie);

  useEffect(() => {
    getMovie(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <div className=' flex-1 relative overflow-hidden'>
      {movie ? (
        <Transition
          appear={true}
          show={!!movie}
          enter='transition-opacity duration-1000'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop}`}
            alt=''
            className='absolute w-full h-full object-cover inset-0 mix-blend-overlay opacity-70'
          />
          <span className='absolute inset-0 bg-gradient-to-t from-gray-900 via-red-900 to-gray-900 opacity-10 w-full h-full'></span>
          <div className='px-3 py-3 relative'>
            <Link
              to='/search'
              className='inline-block p-1 text-gray-500 rounded-full transition-colors duration-200 bg-gray-800 bg-opacity-0 hover:bg-opacity-50 hover:text-gray-400'>
              <ArrowLeftIcon className='h-6 w-6 fill-current' />
            </Link>
            <div className='relative pt-20 pl-20'>
              <h2 className='font-semibold text-5xl tracking-wide text-gray-200'>
                {movie.title}
              </h2>
              <div className='mt-6 max-w-2xl  flex flex-col space-y-5'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center text-red-900'>
                    <StarIcon className='h-5' />
                    <StarIcon className='h-5' />
                    <StarIcon className='h-5' />
                    <StarIcon className='h-5' />
                    <EmptyStarIcon className='h-5' />
                    <span className='ml-2 text-sm text-gray-600  font-semibold'>
                      <strong className='text-gray-200 font-semibold'>
                        4.3{" "}
                      </strong>
                      / 5
                    </span>
                  </div>
                  <p className='text-gray-500 text-sm font-medium'>
                    {movie.genres.reduce((acc, cur) => acc + ", " + cur)}{" "}
                    &middot; {movie.duration} &middot; {movie.releaseYear}
                  </p>
                </div>
                <p className='text-gray-300 text-sm whitespace-normal'>
                  {movie.overview}
                </p>
              </div>
              <div className='mt-9 md:max-w-3xl 2xl:max-w-5xl flex flex-col space-y-9'>
                <div className='flex space-x-2'>
                  <button className='w-1/5 py-2 flex items-center justify-center bg-red-800 hover:bg-red-700 transition-colors text-gray-200 rounded-sm text-sm uppercase tracking-wide'>
                    <PlayIcon className='h-5 w-5 -ml-1 mr-1' />
                    Play Movie
                  </button>
                  <button className='w-1/5 py-2 flex items-center justify-center border border-red-800 text-gray-200 rounded-sm text-sm uppercase tracking-wide hover:bg-red-800 transition transition-colors'>
                    Trailer
                  </button>
                </div>
                <div className='flex justify-between'>
                  <div>
                    <p className='text-gray-300 uppercase text-medium font-semibold tracking-wider'>
                      cast
                    </p>
                    <ul className='flex space-x-5 mt-2'>
                      {movie.movieActors.map(a => (
                        <li>
                          <div className='h-40 w-24 text-gray-200 rounded-sm bg-red-500'>
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${a.photo}`}
                              alt=''
                              className='w-full h-full object-cover '
                            />
                            <p className='text-xs font-light mt-3'>{a.name}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className='text-gray-300 uppercase text-medium font-semibold tracking-wider'>
                      Directed by
                    </p>
                    <ul className='mt-2'>
                      {movie.movieDirectors.map(d => (
                        <li className='text-gray-400 text-sm'>{d.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default MovieDetail;
