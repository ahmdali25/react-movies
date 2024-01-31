import { Link, useLoaderData, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchData from "../api/api";
import { formatDate } from "../utils/formatDateUtils";
import useDynamicTitle from "../utils/dynamicTitleUtils";
import ProfileCard from "../components/ProfileCard";
import MovieCard from "../components/MovieCard";
import Button from "../components/Button";
import TrailerModal from "../components/TrailerModal";
import { StarIcon, PhotoIcon, ArrowRightIcon } from "../components/Icons";

export async function movieDetailLoader({ params }) {
  const { id } = params;
  let data = {
    movie: null,
    cast: null,
    recommendations: [],
  };

  data.movie = await fetchData(`/movie/${id}`);
  data.cast = await fetchData(`/movie/${id}/credits`);
  data.recommendations = await fetchData(`/movie/${id}/recommendations`);

  // scroll to top after get data
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return data;
}

export async function tvDetailLoader({ params }) {
  const { id } = params;
  let data = {
    movie: null,
    cast: null,
    recommendations: [],
  };

  data.movie = await fetchData(`/tv/${id}`);
  data.cast = await fetchData(`/tv/${id}/credits`);
  data.recommendations = await fetchData(`/tv/${id}/recommendations`);

  // scroll to top after get data
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return data;
}

export default function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const data = useLoaderData();

  const [trailer, setTrailer] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const movie = data.movie;
  const cast = data.cast.cast;
  const crew = findDirector(data.cast.crew);
  const recommendations = data.recommendations.results;
  const poster = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  useDynamicTitle(`${movie.title ? movie.title : movie.name} - MovieDB`);

  function timeConvert(num) {
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  }

  function findDirector(arr) {
    const sortedArr = arr.sort((a, b) => {
      if (a.job === "Director") {
        return -1; // "Director" comes first
      } else if (b.job === "Director") {
        return 1; // "Director" comes first
      } else if (a.job === "Executive Producer") {
        return -1; // "Executive Producer" comes next
      } else if (b.job === "Executive Producer") {
        return 1; // "Executive Producer" comes next
      }
      return 0; // No priority, maintain the order
    });

    return sortedArr[0];
  }

  async function handleClick() {
    const data = await fetchData(`/movie/${id}/videos`);
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
          <h1 className="text-4xl font-bold">{movie.title || movie.name}</h1>
          <p className="mt-1 font-semibold">{movie.tagline}</p>
          <div className="mt-2 flex gap-6">
            <div className="flex gap-2">
              <StarIcon />
              <h2 className="text-md font-semibold">
                {movie.vote_average.toFixed(1)}
              </h2>
              <span>
                {location.pathname.startsWith("/movie-detail")
                  ? movie.release_date
                    ? formatDate(movie.release_date)
                    : ""
                  : movie.first_air_date
                  ? formatDate(movie.first_air_date)
                  : ""}
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
          <h2 className="mt-3 text-base font-semibold">{crew?.name ?? ""}</h2>
          <p>{crew?.job ?? ""}</p>
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
            <ArrowRightIcon />
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
              title={movie.title || movie.name}
              poster={movie.poster_path}
              rating={movie.vote_average}
              releaseDate={movie.release_date || movie.first_air_date}
              path={
                location.pathname.startsWith("/movie-detail")
                  ? "movie-detail"
                  : "tv-detail"
              }
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
