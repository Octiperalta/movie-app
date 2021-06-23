import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  movie: "smurfs",
};

const GlobalContext = createContext();

export const useGlobal = () => {
  return useContext(GlobalContext);
};

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const searchMovie = movie => {
    // console.log("movie en globalState: ", movie);
    dispatch({ type: "SEARCH_FOR_A_MOVIE", payload: movie });
  };

  const value = { movie: state.movie, searchMovie };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
