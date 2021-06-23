/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const moviePoster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://previews.123rf.com/images/ksanagraphica/ksanagraphica2008/ksanagraphica200800193/153265708-cinema-poster-template-vector-conceptual-vertical-flyer-in-retro-style-for-movie-festival-.jpg";
  const movieTitle = movie.title;

  return (
    <li key={movie.id}>
      <div className='h-56 overflow-hidden rounded-md transition cursor-pointer duration-300 shadow-md border border-gray-900 hover:border-red-600 hover:border hover:ring-2 hover:ring-red-600 hover:ring-opacity-20'>
        <img src={moviePoster} className='object-cover h-full w-full' alt='' />
      </div>
      <Link
        to={`/movie/${movie.id}`}
        className='mt-2 text-center block text-gray-200 text-xs hover:underline'>
        {movieTitle}
      </Link>
    </li>
  );
}

export default MovieCard;
