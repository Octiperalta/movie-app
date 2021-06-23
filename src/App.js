/* eslint-disable jsx-a11y/anchor-is-valid */
import UserNav from "./components/UserNav";
import MediaSection from "./components/MediaSection";
import { Switch, Route, Redirect } from "react-router-dom";
import GlobalProvider from "./context/GlobalState";
import MovieSearchContainer from "./components/MovieSearchContainer";
import { AnimatePresence, motion } from "framer-motion";
import errorImg from "./img/taken_illustration.svg";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <GlobalProvider>
      <div className=' bg-gray-900 antialiased font-poppins'>
        <div className='min-h-screen flex overflow-hidden'>
          <UserNav />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/home/movies' />
              </Route>
              <Route path='/home' component={ContentCategory} />
              <Route exact path='/settings'>
                Settings
              </Route>
              <Route path='/search'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className='flex-1'>
                  <MovieSearchContainer />
                </motion.div>
              </Route>
              <Route path='/movie/:movieId' component={MovieDetail} />
              <Route path='*'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className='flex-1 flex flex-col items-center justify-center'>
                  <h4 className='text-xl font-semibold text-gray-500 mb-5 '>
                    Oops! Section not found
                  </h4>
                  <img src={errorImg} className='w-80 ' alt='' />;
                </motion.div>
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

const ContentCategory = () => {
  return (
    <Switch>
      <Route exact path='/home/movies'>
        <MediaSection type='movie' />
      </Route>
      <Route exact path='/home/tv'>
        <MediaSection type='tv' />
      </Route>
    </Switch>
  );
};
