const AppReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_FOR_A_MOVIE":
      return {
        movie: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;
