import MovieCard from "./MovieCard";

export default function Tv(data) {
  const movie = data;

  return (
    <div className="mt-4 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
      {movie.data.map((tv) => (
        <MovieCard
          key={tv.id}
          id={tv.id}
          title={tv.name}
          poster={tv.poster_path}
          rating={tv.vote_average}
          releaseDate={tv.first_air_date}
          path="tv-detail"
        ></MovieCard>
      ))}
    </div>
  );
}
