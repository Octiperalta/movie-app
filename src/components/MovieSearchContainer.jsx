import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Loader from "./Loader";
import MovieList from "./MovieList";
import NotFoundSearch from "./NotFoundSearch";

function MovieSearchContainer() {
  const [search, setSearch] = useState(null);
  const [emptySearch, setEmptySearch] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  //   console.log(value);

  const handleSearch = e => {
    setSearch(e.target.value);

    // console.log(e.);
  };

  useEffect(() => {
    if (!search) {
      console.log("Search vacio");
      setEmptySearch(true);
      return;
    }
    let cancel = false;
    setEmptySearch(false);
    setLoading(true);

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=e721b7f5dc531655464907e7c8110ac2&language=en-US&page=1&include_adult=false&query=${search}`
      )
      .then(res => {
        if (cancel) return;
        console.log(res.data.results);
        setSearchResult(res.data.results);
        setLoading(false);
      })
      .catch(err => console.log("Error:", err));
    return () => (cancel = true);
  }, [search]);

  return (
    <div className='py-7 overflow-y-scroll h-screen scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900 scroll-bar-rounded-full  overflow-hidden'>
      <div className='px-6 flex flex-col overflow-hidden'>
        <div className='flex-shrink-0'>
          <span className='flex relative border border-gray-500 rounded-full pl-9 py-1 px-4 w-80 items-center text-gray-500 transition-colors focus-within:text-red-700 focus-within:border-red-700 focus-within:ring focus-within:ring-red-700 focus-within:ring-opacity-10 '>
            <SearchIcon className='absolute left-0 ml-2 h-6 w-6' />
            <input
              type='text'
              placeholder='Search Movies or TV Series '
              className='bg-transparent focus:outline-none w-full py-1 text-gray-200 placeholder-gray-500'
              spellCheck='false'
              onChange={handleSearch}
            />
          </span>
        </div>
        <div className='mt-8 flex-1 '>
          {emptySearch ? (
            ""
          ) : loading ? (
            <Loader />
          ) : searchResult.length > 0 ? (
            <MovieList movies={searchResult} />
          ) : (
            <NotFoundSearch search={search} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieSearchContainer;
