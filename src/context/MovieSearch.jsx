import { createContext, useState } from "react";

const MovieSearchContext = createContext();

// eslint-disable-next-line react/prop-types
const MovieSearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState("");

  return (
    <MovieSearchContext.Provider value={{ query, movie, setQuery, setMovie }}>
      {children}
    </MovieSearchContext.Provider>
  );
};

export const MovieSearch = MovieSearchContext;
export default MovieSearchContextProvider;
