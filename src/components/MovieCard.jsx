import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MovieCard({ id, poster, title, rating, releaseDate }) {
  const imgSrc = `${import.meta.env.VITE_APP_API_IMG_URL}${poster}`;
  const year = new Date(releaseDate).getFullYear();

  return (
    <Link
      to={`/movies/${id}`}
      className="rounded-lg bg-slate-800 transition duration-300 ease-in-out hover:opacity-90"
    >
      <img src={imgSrc} alt={title} className="rounded-lg" />
      <div className="h-24">
        <div className="flex flex-row items-center gap-1 px-3 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 fill-yellow-300 stroke-yellow-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <h2 className="text-md mt-1 font-semibold text-neutral">
            {rating.toFixed(1)}
          </h2>
        </div>
        <h2 className="text-md mt-1 px-4 pb-2 font-semibold text-neutral">
          {title} ({year})
        </h2>
      </div>
    </Link>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
