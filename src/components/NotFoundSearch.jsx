import React from "react";

function NotFoundSearch({ search }) {
  return (
    <div className='mt-14 flex justify-center select-none'>
      <div className='text-gray-400 text-base '>
        <h4>
          Your Search for <strong className='font-medium'> "{search}"</strong>{" "}
          did not have any matches.
        </h4>
        <p className='mt-4 font-medium'>Suggestions: </p>
        <ul className='list-disc list-inside'>
          <li>Try different keywords</li>
          <li>Looking for a movie or TV show?</li>
          <li>try using a movie, TV show title, an actor or director</li>
          <li>Try a genre, like comemdiy, romance, sports, or drama </li>
        </ul>
      </div>
    </div>
  );
}

export default NotFoundSearch;
