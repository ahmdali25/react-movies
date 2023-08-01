import PropTypes from "prop-types";
import { PhotoIcon } from "./Icons";

export default function ProfileCard({ image, name, character }) {
  return (
    <li className="rounded-lg shadow-lg">
      {image ? (
        <img
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${image}`}
          alt={name}
          className="rounded-t-lg"
        />
      ) : (
        <div className="h-3/4 rounded-t-lg bg-[#DBDBDB] px-10 py-24">
          <PhotoIcon />
        </div>
      )}
      <div className="p-2">
        <p className="mt-1 font-semibold">{name}</p>
        <p className="text-sm">{character}</p>
      </div>
    </li>
  );
}

ProfileCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
