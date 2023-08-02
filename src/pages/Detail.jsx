import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovieDetails } from "../services/getMovieDetails";
import { getMovieCredits } from "../services/getMovieCredits";
import { getMovieRecommendations } from "../services/getMovieRecommendations";
import { getMovieVideos } from "../services/getMovieVideos";
import ProfileCard from "../components/ProfileCard";
import MovieCard from "../components/MovieCard";
import Button from "../components/Button";
import TrailerModal from "../components/TrailerModal";
import { StarIcon, PhotoIcon } from "../components/Icons";

export async function movieDetailLoader({ params }) {
  const { id } = params;
  let data = {
    movie: null,
    cast: null,
    recommendations: [],
  };

  data.movie = await getMovieDetails(id);
  data.cast = await getMovieCredits(id);
  data.recommendations = await getMovieRecommendations(id);

  // scroll to top after get data
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return data;
}

export default function Detail() {
  const { id } = useParams();
  const data = useLoaderData();
  const [trailer, setTrailer] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const movie = data.movie;
  const cast = data.cast.cast;
  const crew = findDirector(data.cast.crew);
  const recommendations = data.recommendations.results;
  const poster = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  function timeConvert(num) {
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  }

  function formatDate(date) {
    const newDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return newDate;
  }

  function findDirector(arr) {
    const director = arr.find((crew) => crew.job === "Director");
    return director;
  }

  async function handleClick() {
    const data = await getMovieVideos(id);
    const findTrailer = data.find(
      (video) =>
        (video.name === "Official Trailer") | (video.name === "Main Trailer"),
    );

    setTrailer(findTrailer);
    setIsModalOpen(true);
  }

  // close modal if click outside modal
  useEffect(() => {
    const closeModal = () => {
      setIsModalOpen(false);
    };

    document.body.addEventListener("click", closeModal);
  }, []);

  return (
    <section>
      <div className="flex items-center gap-10">
        {movie.poster_path ? (
          <img
            src={poster}
            alt={movie.title}
            className="rounded-lg shadow-lg"
          />
        ) : (
          <div className="flex h-[450px] w-[300px] items-center rounded-t-lg bg-[#DBDBDB] px-20">
            <PhotoIcon />
          </div>
        )}

        <div>
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="mt-1 font-semibold">{movie.tagline}</p>
          <div className="mt-2 flex gap-6">
            <div className="flex gap-2">
              <StarIcon />
              <h2 className="text-md font-semibold">
                {movie.vote_average.toFixed(1)}
              </h2>
              <span>
                {movie.release_date ? formatDate(movie.release_date) : ""}
              </span>
            </div>
            <div className="list-item">
              <ul className="flex flex-row">
                {movie.genres.map((genre, index) => (
                  <li key={index}>{(index ? ", " : "") + genre.name}</li>
                ))}
              </ul>
            </div>
            <div>
              {movie.runtime ? (
                <span className="list-item">{timeConvert(movie.runtime)}</span>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleClick} icon="play" text="Trailer" />
            <Button icon="watch" text="Watchlist" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Overview</h2>
          <p className="mt-2 font-medium">{movie.overview}</p>
          <h2 className="mt-3 text-base font-semibold">{crew.name}</h2>
          <p>Director</p>
        </div>
      </div>
      <h2 className="mt-3 text-xl font-bold">Cast</h2>
      {cast.length > 0 ? (
        <ul className="mt-3 grid grid-cols-3 gap-4 md:grid-cols-4 xl:grid-cols-8">
          {cast.slice(0, 8).map((cast, index) => (
            <ProfileCard
              key={index}
              image={cast.profile_path}
              name={cast.name}
              character={cast.character}
            />
          ))}
        </ul>
      ) : (
        <p className="mt-3">We don't have any cast added to this movie.</p>
      )}
      {cast.length > 8 ? (
        <Link to={`${id}/cast`}>
          <div className="my-4 flex justify-center gap-2">
            <p className="font-bold">View More </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </Link>
      ) : (
        ""
      )}
      <h1 className="mt-4 text-xl font-bold">Recommendations</h1>
      {recommendations.length > 0 ? (
        <div className="mt-3 grid grid-cols-5 gap-10">
          {recommendations.map((movie) => (
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
      ) : (
        <p className="mt-3">
          We don't have enough data to suggest any movies based on {movie.title}
          .
        </p>
      )}
      {isModalOpen ? <TrailerModal id={trailer.key}></TrailerModal> : ""}
    </section>
  );
}
