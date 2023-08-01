import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { StarIcon, PhotoIcon } from "./Icons";

export default function MovieCard({ id, poster, title, rating, releaseDate }) {
  const imgSrc = `${import.meta.env.VITE_APP_API_IMG_URL}${poster}`;
  const year = new Date(releaseDate).getFullYear();

  return (
    <Link
      to={`/movie/${id}`}
      className="rounded-lg bg-slate-800 transition duration-300 ease-in-out hover:opacity-90"
    >
      {poster ? (
        <img src={imgSrc} alt={title} className="w-full rounded-t-lg xl:h-96" />
      ) : (
        <div className="h-4/5 rounded-t-lg bg-[#DBDBDB] px-16 py-24">
          <PhotoIcon />
        </div>
      )}
      <div className="h-auto">
        <div className="flex flex-row items-center gap-1 px-3 py-1">
          <StarIcon />
          <h2 className="text-md mt-1 font-semibold text-neutral">
            {rating.toFixed(1)}
          </h2>
        </div>
        <h2 className="text-md mt-1 px-4 pb-2 font-semibold text-neutral">
          {title} {year ? `(${year})` : ""}
        </h2>
      </div>
    </Link>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
