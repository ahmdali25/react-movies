import MovieCard from "./MovieCard";

export default function Movie(data) {
  const movie = data;
  return (
    <div className="mt-4 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
      {movie.data.map((movie) => (
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
