import MovieCard from "../components/MovieCard";
import { useContext } from "react";
import { MovieSearch } from "../context/MovieSearch";

export default function Result() {
  const { query, movie } = useContext(MovieSearch);
  return (
    <section>
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-primary">
          Result for : {query}
        </h1>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
        {movie.map((movie) => (
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
    </section>
  );
}
