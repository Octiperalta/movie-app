import React, { Fragment } from "react";
import MovieCard from "./MovieCard";
import { Transition } from "@headlessui/react";

function MovieList({ movies }) {
  return (
    <Transition
      as={Fragment}
      appear={true}
      show={true}
      enter='transition-opacity duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'>
      <ul>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-7 h-full gap-5'>
          {movies.map(movie => (
            <MovieCard movie={movie} />
          ))}
        </div>
        {/* {movies && movies.map(movie => <li key={movie.id}>{movie.title} </li>)} */}
      </ul>
    </Transition>
  );
}

export default MovieList;
