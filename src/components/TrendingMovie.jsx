import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getTrendingMovies } from "../services/getTrendingMovies";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies((data) => {
      setPopularMovies(data);
    });
  }, []);

  return (
    <div className="mt-4 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
      {popularMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          rating={movie.vote_average}
          releaseDate={movie.release_date}
        ></MovieCard>
      ))}
    </div>
  );
}
