import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import { getMostPopular, getTopRated } from "../services/contentService";
import { AnimatePresence, motion } from "framer-motion";

function ContentNav({ type }) {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const isMovie = type === "movie";

  useEffect(() => {
    setPopular([]);
    setTopRated([]);
    getMostPopular(type).then(res => setPopular(res.slice(0, 3)));
    getTopRated(type).then(res => setTopRated(res.slice(0, 3)));
  }, [type]);

  return (
    <AnimatePresence>
      <div className='flex-shrink-0 w-64 py-9 overflow-y-auto h-screen scrollbar-thin'>
        <div className='px-9 space-y-6 '>
          <div className='flex flex-col space-y-8'>
            {/* Popular */}
            <div>
              <p className='text-gray-100 font-medium text-sm 2xl:text-base'>
                Popular {isMovie ? "Movies" : "Series"}
              </p>
              <div className='mt-3 flex flex-col space-y-4'>
                {/* Movies */}
                {popular.length > 0
                  ? popular.map(e => (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}>
                        <MediaCard value={e} isMovie={isMovie} popular={true} />
                      </motion.div>
                    ))
                  : "Cargando"}
              </div>
            </div>

            {/* Top Rated */}
            <div>
              <p className='text-gray-100 font-medium text-sm 2xl:text-base'>
                Top Rated {isMovie ? "Movies" : "Series"}
              </p>
              <div className='mt-3 flex flex-col space-y-4'>
                {topRated.length > 0
                  ? topRated.map(e => (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}>
                        <MediaCard value={e} isMovie={isMovie} />
                      </motion.div>
                    ))
                  : "Cargando"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default ContentNav;
